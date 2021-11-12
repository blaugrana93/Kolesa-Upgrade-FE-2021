import { getItemsRequest, toggleFavoriteRequest } from './requests';
import AppElementClass from './AppElementClass'
import LoaderClass from './LoaderClass'
import ErrorClass from './ErrorClass'

export default () => {

    ErrorClass.errorClassHide();
    LoaderClass.loaderClassInnerHtml('Загрузка...');
    LoaderClass.loaderClassShow();

    getItemsRequest()
        .then(({ data }) => {
            if (data.result !== 'ok' || typeof data.html === 'undefined') {

                ErrorClass.errorClassInnerHtml('Произошла ошибка, попробуйте ещё раз.');
                ErrorClass.errorClassShow();

            } else {

                AppElementClass.appElementClassInnerHtml(data.html);
                AppElementClass.appElementClassShow();

                AppElementClass.appElementClassAddEventListener((e) => {

                    e.preventDefault();
                    e.currentTarget.textContent = 'Загрузка...';

                    toggleFavoriteRequest(e.currentTarget.dataset.id)
                        .then(({ data: buttonData }) => {
                            if (buttonData.result === 'set') {
                                e.currentTarget.textContent = '🌝';
                            } else {
                                e.currentTarget.textContent = '🌚';
                            }
                        });
                });
            }
        })
        .catch((e) => {
            ErrorClass.errorClassInnerHtml(e.message);
            ErrorClass.errorClassShow();
        })
        .finally(() => {
            LoaderClass.loaderClassHide();
        });
};

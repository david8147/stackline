import apiFetchData from '../database/Webdev_data2.json';

export const fetchAPIData = () =>
    new Promise(resolve => {
        setTimeout(() =>
            resolve(apiFetchData[0]), 1000);
    });

export const useHelper = () => {
    return {
        phoneClear: phone => {
            return phone.replace(/\D/g, '');
        }
    }
}
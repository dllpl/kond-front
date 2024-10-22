import {configure, defineRule} from 'vee-validate';
import {localize, setLocale} from '@vee-validate/i18n'
import {email, max, min, required, between, url} from '@vee-validate/rules';

defineRule('required_if', (value, [target], ctx)=> {
    return !(ctx.form[target] === ctx.rule.params[1] && !value);
})

export default defineNuxtPlugin(nuxtApp => {

    defineRule('required', required);
    defineRule('email', email);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('between', between)
    defineRule('url', url)
    defineRule('phone_ru', (value) => {
        if (!value || value.length !== 18) {
            return 'Введите корректный номер'
        }
        return true;
    });

    configure({
        generateMessage: localize({
            ru: {
                messages: {
                    "max": "Должно быть меньше 0:{length} символов",
                    "min": "Должно быть больше 0:{length} символов",
                    "url": "Некорректная ссылка",
                    "required": "Обязательное поле",
                }
            }
        }),
    })
    setLocale('ru');
})
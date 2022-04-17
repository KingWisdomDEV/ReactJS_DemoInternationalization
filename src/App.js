import * as React from 'react'
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'
import messages from './i18n/messages'
import { I18nProvider, LOCALES } from './i18n';
import translate from './i18n/translate'

// ======================= First demo  =========================
// Translated messages in French with matching IDs to what you declared
// const messagesInFrench = {
//     myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
// }

// export default function App() {
//     console.log(messages)
//     return (
//         <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
//             <p>
//                 <FormattedMessage
//                     id="myMessage"
//                     defaultMessage="Today is {ts, date, ::yyyyMMdd}"
//                     values={{ ts: Date.now() }}
//                 />
//                 <br />
//                 <FormattedNumber value={19} style="currency" currency="EUR" />
//             </p>
//         </IntlProvider>
//     )
// }

// ======================= Advance demo  =========================
// Using custom provider
export default function App() {
    const [locale, setLocales] = React.useState(LOCALES.VIETNAM);

    return (
        <I18nProvider
            locale={locale}
            defaultLocale={locale}
        >
            <h1>
                {translate("hello")}
            </h1>
            <hr />
            <h2>
                {translate("edit-file", { file: "src/App.js" })}
            </h2>
            
            <button onClick={() => setLocales(LOCALES.VIETNAM)}>Vietnam</button>
            <button onClick={() => setLocales(LOCALES.ENGLISH)}>English</button>
            <button onClick={() => setLocales(LOCALES.GERMAN)}>German</button>
            <button onClick={() => setLocales(LOCALES.FRENCH)}>French</button>
        </I18nProvider>
    )
}
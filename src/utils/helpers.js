export const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));

export const formatDateCity = (date) =>
    new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
        weekday: "long",
    }).format(new Date(date));

export function convertToEmoji(countryCode) {
    const codePoints = countryCode
        .toUpperCase()
        .split("")
        .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

export function isonToEmoji(countryCode) {
    const codePoints = countryCode
        .toUpperCase()
        .split("")
        .map((char) => (char.charCodeAt(0) % 32) + 0x1f1e5);
    return String.fromCharCode(...codePoints);
}

export function flagEmojiApi(countryCode) {
    const data = `https://flagcdn.com/16x12/${countryCode}.webp`.toLowerCase();
    if (!data) return;
    return data;
}
// export async function flagEmojiApi(countryCode) {
//     try {
//         const response = await fetch(
//             `https://flagcdn.com/16x12/${countryCode}.webp`,
//         );
//         const data = response.toLowerCase();
//         if (!data) return;
//         return data;
//     } catch (error) {
//         console.error(error);
//     }
// }

// export function isonToEmoji(countryCode) {
//     return countryCode
//         .split("")
//         .map((char) => (char.charCodeAt(0) % 32) + 0x1f1e5)
//         .map((n) => String.fromCharCode(n))
//         .join("");
// }

// export function convertToEmojiCity(countryCode) {
//     const flagEmoji = countryCode
//         .toUpperCase()
//         .replace(/./g, (char) =>
//             String.fromCodePoint(char.charCodeAt() + 127397),
//         );
//     return flagEmoji;
// }

// export function convertToEmojiCity2(countryCode) {
//     // التحقق من أن الرمز يتألف من حروف فقط وأن الطول صحيح
//     if (/^[a-zA-Z]+$/.test(countryCode) && countryCode.length === 2) {
//         const flagEmoji = countryCode
//             .toUpperCase()
//             .replace(/./g, (char) =>
//                 String.fromCodePoint(char.charCodeAt() + 127397),
//             );
//         return flagEmoji;
//     } else {
//         return countryCode.toUpperCase();
//     }
// }

// export async function convertToEmoji3(countryCode) {
//     // التحقق من أن الرمز يتألف من حروف فقط وأن الطول صحيح
//     if (/^[a-zA-Z]+$/.test(countryCode) && countryCode.length === 2) {
//         try {
//             const response = await fetch(
//                 `https://countryflags.io/${countryCode}/flat/64.png`,
//             );

//             if (response.ok) {
//                 // يمكنك استخدام إيموجي المستلم هنا
//                 return `🇮🇹`; // مثال: إيموجي إيطاليا
//             } else {
//                 // إذا لم يكن هناك إيموجي متاح، قد يكون من الأفضل إظهار الرمز كنص
//                 return countryCode.toUpperCase();
//             }
//         } catch (error) {
//             console.error("Error fetching flag emoji:", error);
//             // في حالة حدوث أي خطأ، يمكنك إظهار الرمز كنص
//             return countryCode.toUpperCase();
//         }
//     } else {
//         return countryCode.toUpperCase();
//     }
// }

// export async function convertToEmoji4(countryCode) {
//     const apiUrl = `https://restcountries.com/v3.1/alpha/${countryCode}`;

//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();

//         if (data.status === 404) {
//             // إذا كان رمز الدولة غير صالح، يمكنك إعادة الرمز كنص عادي
//             return countryCode.toUpperCase();
//         }

//         // يمكنك استخدام Emoji Flag API للحصول على الإيموجي
//         const flagEmoji = data.flags[0];
//         return flagEmoji;
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         return countryCode.toUpperCase();
//     }
// }

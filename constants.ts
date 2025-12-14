import { AppContent } from './types';

export const PHONE_NUMBER = "+212600000000"; // Placeholder phone number
export const WHATSAPP_LINK = "https://wa.me/212600000000";

export const CONTENT: AppContent = {
  ar: {
    labels: {
      recommended: "موصى به",
    },
    header: {
      title: "واي فاي وكاميرات خدامين بلا صداع الرأس",
      subtitle: "نخدمو القهاوي، المطاعم، وجميع المحلات التجارية",
      button: {
        text: "اتصل بنا الآن",
      },
    },
    body: {
      description: "نوفرو تركيب وصيانة الواي فاي والكاميرات بطريقة بسيطة. إلى وقع مشكل، كتعيط لينا ونصلحو ليك بلا تعقيد.",
      offers: [
        {
          name: "عرض راحة البال",
          price: "500 – 800 درهم / شهر",
          features: [
            "مراقبة الواي فاي",
            "فحص الكاميرات",
            "تدخل سريع عند المشكل",
            "رقم واحد للدعم"
          ],
          button: "اتصل بنا",
          isPopular: true
        },
        {
          name: "تركيب فقط",
          price: "دفع مرة واحدة",
          features: [
            "تركيب الواي فاي",
            "تركيب الكاميرات",
            "شرح بسيط للاستعمال"
          ],
          button: "طلب العرض"
        }
      ]
    },
    footer: {
      text: "ChabakaPro – حلول بسيطة للمحلات التجارية",
      trustMessage: "خدمة واضحة، بلا تعقيد",
      contact: {
        phone: PHONE_NUMBER,
        whatsapp: true
      }
    }
  },
  fr: {
    labels: {
      recommended: "Recommandé",
    },
    header: {
      title: "Wi-Fi et caméras fiables, sans stress",
      subtitle: "Pour cafés, restaurants et commerces",
      button: {
        text: "Contactez-nous",
      },
    },
    body: {
      description: "Nous installons et entretenons le Wi-Fi et les caméras de manière simple. En cas de problème, vous nous appelez et on s’en occupe.",
      offers: [
        {
          name: "Offre Tranquillité",
          price: "500 – 800 DH / mois",
          features: [
            "Surveillance du Wi-Fi",
            "Vérification des caméras",
            "Intervention rapide",
            "Un seul numéro de support"
          ],
          button: "Nous appeler",
          isPopular: true
        },
        {
          name: "Installation uniquement",
          price: "Paiement unique",
          features: [
            "Installation du Wi-Fi",
            "Installation des caméras",
            "Explication simple"
          ],
          button: "Demander"
        }
      ]
    },
    footer: {
      text: "ChabakaPro – Solutions simples pour commerces",
      trustMessage: "Service clair, sans complications",
      contact: {
        phone: PHONE_NUMBER,
        whatsapp: true
      }
    }
  }
};
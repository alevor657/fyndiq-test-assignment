interface Image {
  cloudinaryId: string;
  url: string;
}

interface OldPrice {
  formatted: string;
  amount: number;
  currency: string;
}

interface Price {
  formatted: string;
  amount: number;
  currency: string;
}

export interface Article {
  article_id: string;
  article_url: string;
  images: Image[];
  old_price: OldPrice;
  price: Price;
  product_id: string;
  shipping_time_max: string;
  shipping_time_min: string;
  slug: string;
  title: string;
  averageRating: string;
  expectedDeliveryDate: string;
}

export interface ProductsResponse {
  articles: Article[];
}

export function getProducts(): Promise<ProductsResponse> {
  // return fetch(GET_PRODUCTS_URL.toString()).then((response) => response.json());

  // I stubbed here to save you guys some pennies C:
  return Promise.resolve({
    articles: [
      {
        article_id: "c5e0af90-8c6a-4ca0-973e-2763152e0ec8",
        article_url:
          "/produkt/2-pack-hardat-glas-for-iphone-11-c5e0af908c6a4ca0",
        images: [
          {
            cloudinaryId:
              "prod/f65fde5be866458a/2-pack-hardat-glas-for-iphone-11-f91c6",
            url:
              "https://media.fyndiq.se/product/bf/c4/c1/230514528fb9d6a7cc77bdbc9403060e2b/original.png",
          },
        ],
        old_price: {
          formatted: "299 kr",
          amount: 299,
          currency: "SEK",
        },
        price: {
          formatted: "39 kr",
          amount: 39,
          currency: "SEK",
        },
        product_id: "bc439938819f81b2f26c89062d4fecd4",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug: "2-pack-hardat-glas-for-iphone-11-c5e0af908c6a4ca0",
        title: "2-Pack härdat glas för iPhone 11",
        averageRating: "4.1",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "90ce2f36-9e76-4d51-aea2-b9a289724004",
        article_url:
          "/produkt/2-pack-iphone-7-8-hardat-glas-skarmskydd-90ce2f369e764d51",
        images: [
          {
            cloudinaryId:
              "prod/f65fde5be866458a/2-pack-iphone-7-8-hardat-glas-skarmskydd-d0d2a",
            url:
              "https://media.fyndiq.se/product/ae/a6/91/cb3327a61b30fdd1848efbe38fd9448b57/original.png",
          },
        ],
        old_price: {
          formatted: "129 kr",
          amount: 129,
          currency: "SEK",
        },
        price: {
          formatted: "39 kr",
          amount: 39,
          currency: "SEK",
        },
        product_id: "c6d464573cfac58ca64c74a5f95db062",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug: "2-pack-iphone-7-8-hardat-glas-skarmskydd-90ce2f369e764d51",
        title: "2-Pack - iPhone 7/8 - Härdat Glas Skärmskydd",
        averageRating: "4.2",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "78348fe3-f230-43d0-9017-f196de1578bf",
        article_url:
          "/produkt/5-pack-lightning-laddare-iphone-xs-max-x-8-7-6-5se-5s-78348fe3f23043d0",
        images: [
          {
            cloudinaryId:
              "prod/f65fde5be866458a/5-pack-lightning-laddare-iphone-xs-max-x-8-7-6-5se-5s-78eec",
            url:
              "https://teknikhallen.se/upload/Sargons-bilder-2/Kablar/LIGHTNING/Lightning-5pack-02.png",
          },
        ],
        old_price: {
          formatted: "499 kr",
          amount: 499,
          currency: "SEK",
        },
        price: {
          formatted: "69 kr",
          amount: 69,
          currency: "SEK",
        },
        product_id: "25d0c2332d4a9587334ed14ede821738",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug:
          "5-pack-lightning-laddare-iphone-xs-max-x-8-7-6-5se-5s-78348fe3f23043d0",
        title: "5-pack - Lightning laddare iPhone Xs/Max/X/8/7/6/5SE/5S",
        averageRating: "3.9",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "b827ddb4-4088-4a18-81dd-4819db02e216",
        article_url:
          "/produkt/2-pack-hardat-glas-for-iphone-x-xs-b827ddb440884a18",
        images: [
          {
            cloudinaryId:
              "prod/f65fde5be866458a/2-pack-hardat-glas-for-iphone-x-xs-68576",
            url:
              "https://media.fyndiq.se/product/09/af/8a/ec9908f77cb8c72f91487c8cbe58b7f35b/original.png",
          },
        ],
        old_price: {
          formatted: "299 kr",
          amount: 299,
          currency: "SEK",
        },
        price: {
          formatted: "39 kr",
          amount: 39,
          currency: "SEK",
        },
        product_id: "8c2bf4dc90e0c0c19b6b33d9395a2b0f",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug: "2-pack-hardat-glas-for-iphone-x-xs-b827ddb440884a18",
        title: "2-Pack härdat glas för iPhone X/Xs",
        averageRating: "4.2",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "2d1ec4e8-27b1-4094-b152-d89b006e4e1d",
        article_url:
          "/produkt/2-pack-iphone-11-hardat-glas-hel-tackande-skarmskydd-2d1ec4e827b14094",
        images: [
          {
            cloudinaryId:
              "prod/191e98a8139c4650/2-pack-iphone-xr-hardat-glas-hel-tackande-skarmskydd-4aec5",
            url:
              "https://quickbutik.imgix.net/22224f/products/5f34d3bd9a2f2.jpeg",
          },
        ],
        old_price: {
          formatted: "199 kr",
          amount: 199,
          currency: "SEK",
        },
        price: {
          formatted: "59 kr",
          amount: 59,
          currency: "SEK",
        },
        product_id: "614d9daeda50fe5d9bfbd415662f58e8",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug:
          "2-pack-iphone-11-hardat-glas-hel-tackande-skarmskydd-2d1ec4e827b14094",
        title: "2-pack iPhone 11 Härdat glas Hel Täckande Skärmskydd",
        averageRating: "3.6",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "759e81ba-c9ee-4173-b263-9d882d7b2a3a",
        article_url:
          "/produkt/iphone-laddare-for-apple-11-12-usb-c-stromadapter-20w-pd-vit-vit-759e81bac9ee4173",
        images: [
          {
            cloudinaryId:
              "prod/76de90c61b5b4295/iphone-laddare-for-apple-11-12-usb-c-stromadapter-20w-pd-vit-vit-10cfada14a2b",
            url:
              "https://images.sello.io/products/acc/28924/5346777666531dcf675e5ef662e63186d16297f3.jpg",
          },
        ],
        old_price: {
          formatted: "349 kr",
          amount: 349,
          currency: "SEK",
        },
        price: {
          formatted: "89 kr",
          amount: 89,
          currency: "SEK",
        },
        product_id: "f4e57b58af7015dd8095d8b2192ce83b",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug:
          "iphone-laddare-for-apple-11-12-usb-c-stromadapter-20w-pd-vit-vit-759e81bac9ee4173",
        title:
          "iPhone laddare för Apple 11/12 USB-C strömadapter 20W PD Vit Vit",
        averageRating: "4.5",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "66e85c1d-6187-4952-b978-4d9d64073f18",
        article_url:
          "/produkt/2-pack-iphone-12-12-pro-hardat-glas-skarmskydd-66e85c1d61874952",
        images: [
          {
            cloudinaryId:
              "prod/f65fde5be866458a/2-pack-iphone-12-12-pro-hardat-glas-skarmskydd-095d6",
            url:
              "https://teknikhallen.se/upload/Sargons-bilder-2/iPhone/iPhone-12/Tempered-Glass/iPhone-12-TEMP-2.jpg",
          },
        ],
        old_price: {
          formatted: "299 kr",
          amount: 299,
          currency: "SEK",
        },
        price: {
          formatted: "39 kr",
          amount: 39,
          currency: "SEK",
        },
        product_id: "4e5960713a128ece571925003ceb633b",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug: "2-pack-iphone-12-12-pro-hardat-glas-skarmskydd-66e85c1d61874952",
        title: "2-Pack - iPhone 12 / 12 Pro - Härdat Glas Skärmskydd",
        averageRating: "3.6",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "071ce82f-6121-42f0-82d4-b9cfea85dcf7",
        article_url:
          "/produkt/2-pack-iphone-12-12-pro-61-inch-hardat-heltackande-skarmskydd-071ce82f612142f0",
        images: [
          {
            cloudinaryId:
              "prod/191e98a8139c4650/2-pack-iphone-12-12-pro-61-inch-hardat-heltackande-skarmskydd-ed36a",
            url:
              "https://quickbutik.imgix.net/22224f/products/5f99154a86cee.jpeg",
          },
        ],
        old_price: null,
        price: {
          formatted: "59 kr",
          amount: 59,
          currency: "SEK",
        },
        product_id: "f578990a11811ccdfcd7c7eb0e338b8e",
        shipping_time_max: "5",
        shipping_time_min: "1",
        slug:
          "2-pack-iphone-12-12-pro-61-inch-hardat-heltackande-skarmskydd-071ce82f612142f0",
        title: "2-pack iPhone 12/12 Pro 6,1 Inch Härdat Heltäckande Skärmskydd",
        averageRating: "4.5",
        expectedDeliveryDate: "2021-04-14",
      },
      {
        article_id: "209c9824-3216-4c3f-b413-7438e3ade15b",
        article_url: "/produkt/iphone-11-matt-svart-skal-209c982432164c3f",
        images: [
          {
            cloudinaryId:
              "prod/191e98a8139c4650/iphone-11-matt-svart-skal-254eb",
            url:
              "https://quickbutik.imgix.net/22224f/products/5f33d83e20ba5.jpeg",
          },
        ],
        old_price: {
          formatted: "199 kr",
          amount: 199,
          currency: "SEK",
        },
        price: {
          formatted: "39 kr",
          amount: 39,
          currency: "SEK",
        },
        product_id: "80800ecbbcbbbcb88510b2700ed4a891",
        shipping_time_max: "5",
        shipping_time_min: "1",
        slug: "iphone-11-matt-svart-skal-209c982432164c3f",
        title: "iPhone 11 Matt Svart Skal ",
        averageRating: "4.4",
        expectedDeliveryDate: "2021-04-14",
      },
      {
        article_id: "ce348e8a-a4cf-4b68-a0e1-078277436e56",
        article_url:
          "/produkt/iphone-11-skal-extra-stottaligt-ce348e8aa4cf4b68",
        images: [
          {
            cloudinaryId:
              "prod/191e98a8139c4650/iphone-11-skal-extra-stottaligt-7e141",
            url:
              "https://quickbutik.imgix.net/22224f/products/5f33d5b5c41e2.png",
          },
        ],
        old_price: {
          formatted: "199 kr",
          amount: 199,
          currency: "SEK",
        },
        price: {
          formatted: "49 kr",
          amount: 49,
          currency: "SEK",
        },
        product_id: "57695482d27e6f1c1d00efe0b8744d95",
        shipping_time_max: "5",
        shipping_time_min: "1",
        slug: "iphone-11-skal-extra-stottaligt-ce348e8aa4cf4b68",
        title: "iPhone 11 skal - extra stöttåligt",
        averageRating: "4.6",
        expectedDeliveryDate: "2021-04-14",
      },
      {
        article_id: "b0921952-e40b-4fc0-a495-b3b4d4419cd3",
        article_url:
          "/produkt/3-pack-c4u-r-extra-stark-hardat-glas-skarmskydd-iphone-11-xr-b0921952e40b4fc0",
        images: [
          {
            cloudinaryId:
              "prod/60408e00585a4c14/3-pack-c4u-r-extra-stark-hardat-glas-skarmskydd-iphone-11-xr-f400f",
            url:
              "https://images.sello.io/products/acc/10383/513561593250264c6aa43f8d627f7167dfc20aca.jpg",
          },
        ],
        old_price: {
          formatted: "199 kr",
          amount: 199,
          currency: "SEK",
        },
        price: {
          formatted: "48 kr",
          amount: 48,
          currency: "SEK",
        },
        product_id: "21aefcb4c61c87d67fb9a199adf969e9",
        shipping_time_max: "2",
        shipping_time_min: "1",
        slug:
          "3-pack-c4u-r-extra-stark-hardat-glas-skarmskydd-iphone-11-xr-b0921952e40b4fc0",
        title: "3-pack C4U® Extra Stark Härdat Glas Skärmskydd iPhone 11 - XR",
        averageRating: "3.8",
        expectedDeliveryDate: "2021-04-09",
      },
      {
        article_id: "b7756b69-e257-4441-87a9-81b7080e2bb2",
        article_url:
          "/produkt/2st-orignal-samsung-galaxy-s10-s9-usb-c-kabel-svart-svart-b7756b69e2574441",
        images: [
          {
            cloudinaryId:
              "prod/76de90c61b5b4295/2st-orignal-samsung-galaxy-s10-s9-usb-c-kabel-svart-svart-cf17c",
            url:
              "https://images.sello.io/products/acc/28924/399080969ec03116c2683c6b568efce8f088817b.jpg",
          },
        ],
        old_price: {
          formatted: "349 kr",
          amount: 349,
          currency: "SEK",
        },
        price: {
          formatted: "119 kr",
          amount: 119,
          currency: "SEK",
        },
        product_id: "3493caa548ba530aed6d2a6cde03b06a",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug:
          "2st-orignal-samsung-galaxy-s10-s9-usb-c-kabel-svart-svart-b7756b69e2574441",
        title: "2st Orignal Samsung Galaxy S10 , S9 USB-C Kabel Svart Svart",
        averageRating: "4.9",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "0e9a7c31-d900-4f11-a1d3-74d1697d3166",
        article_url:
          "/produkt/iphone-12-12-pro-61-inch-tpu-skal-slimmat-0e9a7c31d9004f11",
        images: [
          {
            cloudinaryId:
              "prod/191e98a8139c4650/iphone-12-12-pro-61-inch-tpu-skal-slimmat-edd23",
            url:
              "https://quickbutik.imgix.net/22224f/products/5f86f65206505.jpeg",
          },
        ],
        old_price: null,
        price: {
          formatted: "39 kr",
          amount: 39,
          currency: "SEK",
        },
        product_id: "5ff59f922097bc8d80c60bbd911abb2e",
        shipping_time_max: "2",
        shipping_time_min: "1",
        slug: "iphone-12-12-pro-61-inch-tpu-skal-slimmat-0e9a7c31d9004f11",
        title: "iPhone 12 / 12 Pro 6,1 Inch TPU Skal - Slimmat",
        averageRating: "4.2",
        expectedDeliveryDate: "2021-04-09",
      },
      {
        article_id: "211e38db-671a-453c-bc5e-61556c2031ca",
        article_url:
          "/produkt/2st-hardat-glas-iphone-12-12-pro-skarmskydd-transparent-211e38db671a453c",
        images: [
          {
            cloudinaryId:
              "prod/a54a1ec69ec14256/2st-hardat-glas-iphone-12-pro-skarmskydd-transparent-d97ab",
            url:
              "https://images.sello.io/products/acc/15363/51435729163948df5fb29c58d181ef1a4784c963.jpg",
          },
        ],
        old_price: {
          formatted: "89 kr",
          amount: 89,
          currency: "SEK",
        },
        price: {
          formatted: "39 kr",
          amount: 39,
          currency: "SEK",
        },
        product_id: "20b7eb981a7845827d8cd91b52e72c3b",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug:
          "2st-hardat-glas-iphone-12-12-pro-skarmskydd-transparent-211e38db671a453c",
        title: "2st Härdat glas iPhone 12 / 12 Pro - Skärmskydd Transparent",
        averageRating: "4.2",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "5171114d-c1ac-46ef-b33e-57a75e886bb5",
        article_url:
          "/produkt/2-pack-2-meter-lightning-iphone-laddnings-kabel-svart-5171114dc1ac46ef",
        images: [
          {
            cloudinaryId:
              "prod/191e98a8139c4650/2-pack-2-meter-lightning-kabel-svart-55b13",
            url:
              "https://quickbutik.imgix.net/22224f/products/5f7485baa8019.jpeg",
          },
        ],
        old_price: {
          formatted: "299 kr",
          amount: 299,
          currency: "SEK",
        },
        price: {
          formatted: "79 kr",
          amount: 79,
          currency: "SEK",
        },
        product_id: "742fabd5950ad060853afaf2f978722f",
        shipping_time_max: "5",
        shipping_time_min: "1",
        slug:
          "2-pack-2-meter-lightning-iphone-laddnings-kabel-svart-5171114dc1ac46ef",
        title: "2-Pack 2 meter Lightning iPhone Laddnings Kabel Svart",
        averageRating: "4.0",
        expectedDeliveryDate: "2021-04-14",
      },
      {
        article_id: "301612f9-9788-4c11-b415-22a99e6f65f7",
        article_url:
          "/produkt/3m-lightning-kabel-for-bade-laddning-och-overforing-vit-3-m-301612f997884c11",
        images: [
          {
            cloudinaryId:
              "prod/a64cf5131897485c/3m-lightning-kabel-for-bade-laddning-och-overforing-vit-3-m-890d0",
            url:
              "https://s3-eu-west-1.amazonaws.com/storage.quickbutik.com/stores/18363U/products/5f7ecfe81d731.jpeg",
          },
        ],
        old_price: {
          formatted: "99 kr",
          amount: 99,
          currency: "SEK",
        },
        price: {
          formatted: "59 kr",
          amount: 59,
          currency: "SEK",
        },
        product_id: "9b41778847a29f63911ac14347e1ab2f",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug:
          "3m-lightning-kabel-for-bade-laddning-och-overforing-vit-3-m-301612f997884c11",
        title: "3m Lightning kabel för både laddning och överföring vit 3 m",
        averageRating: "4.3",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "f5b46e8a-e398-4daa-b4a5-96df20aa7e8a",
        article_url:
          "/produkt/2-pack-hardat-glas-for-iphone-11-pro-f5b46e8ae3984daa",
        images: [
          {
            cloudinaryId:
              "prod/f65fde5be866458a/2-pack-hardat-glas-for-iphone-11-pro-max-b549d",
            url:
              "https://media.fyndiq.se/product/0c/70/da/aa688ba5fec11e8834babda5f23f22c6a1/original.png",
          },
        ],
        old_price: {
          formatted: "299 kr",
          amount: 299,
          currency: "SEK",
        },
        price: {
          formatted: "35 kr",
          amount: 35,
          currency: "SEK",
        },
        product_id: "12d2aed1c3c560e393fe8a84aeeaaf3c",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug: "2-pack-hardat-glas-for-iphone-11-pro-f5b46e8ae3984daa",
        title: "2-Pack härdat glas för iPhone 11 Pro",
        averageRating: "4.1",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "9ae42e77-5693-4a9c-a02d-98d3e408c767",
        article_url:
          "/produkt/2-pack-hardat-glas-for-iphone-11-pro-max-9ae42e7756934a9c",
        images: [
          {
            cloudinaryId:
              "prod/f65fde5be866458a/2-pack-hardat-glas-for-iphone-11-pro-max-b549d",
            url:
              "https://media.fyndiq.se/product/0c/70/da/aa688ba5fec11e8834babda5f23f22c6a1/original.png",
          },
        ],
        old_price: {
          formatted: "299 kr",
          amount: 299,
          currency: "SEK",
        },
        price: {
          formatted: "39 kr",
          amount: 39,
          currency: "SEK",
        },
        product_id: "825cfaa25e26da9d64c44b8e7f52d189",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug: "2-pack-hardat-glas-for-iphone-11-pro-max-9ae42e7756934a9c",
        title: "2-Pack härdat glas för iPhone 11 Pro Max",
        averageRating: "4.1",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "3d27ebbd-06eb-47ff-a4da-46e44fb1212a",
        article_url:
          "/produkt/2-pack-hardat-glas-for-iphone-12-pro-max-3d27ebbd06eb47ff",
        images: [
          {
            cloudinaryId:
              "prod/f65fde5be866458a/2-pack-hardat-glas-for-iphone-12-pro-1c4c1",
            url:
              "https://teknikhallen.se/upload/Sargons-bilder-2/iPhone/iPhone-12/Tempered-Glass/iPhone-12-TEMP-1.jpg",
          },
        ],
        old_price: {
          formatted: "299 kr",
          amount: 299,
          currency: "SEK",
        },
        price: {
          formatted: "39 kr",
          amount: 39,
          currency: "SEK",
        },
        product_id: "24d0b6045f42aa235c3da6c267fa3702",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug: "2-pack-hardat-glas-for-iphone-12-pro-max-3d27ebbd06eb47ff",
        title: "2-Pack härdat glas för iPhone 12 Pro Max",
        averageRating: "4.1",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "c3e47aa1-0245-45b1-b9bc-04df12f1e2f3",
        article_url:
          "/produkt/apple-lightning-kabel-usb-till-lightning-2m-vit-md819zm-a-b-c3e47aa1024545b1",
        images: [
          {
            cloudinaryId:
              "prod/af9f1039845a4bb3/apple-lightning-kabel-usb-till-lightning-2m-vit-md819zm-a-b-8746b",
            url:
              "https://images.sello.io/products/acc/46159/49117127fb00e37fc593ccf66e589571391d4a9b.jpg",
          },
        ],
        old_price: {
          formatted: "329 kr",
          amount: 329,
          currency: "SEK",
        },
        price: {
          formatted: "149 kr",
          amount: 149,
          currency: "SEK",
        },
        product_id: "ad2fbad18a0dce2dcd78b87f0fee3b63",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug:
          "apple-lightning-kabel-usb-till-lightning-2m-vit-md819zm-a-b-c3e47aa1024545b1",
        title:
          "Apple Lightning kabel, USB till Lightning, 2m, vit, MD819ZM/A (B",
        averageRating: "4.3",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "ded79b67-58bb-4633-ad8c-9b95edca8d12",
        article_url:
          "/produkt/2-pack-iphone-7-8-plus-hardat-glas-skarmskydd-ded79b6758bb4633",
        images: [
          {
            cloudinaryId:
              "prod/f65fde5be866458a/2-pack-iphone-7-8-hardat-glas-skarmskydd-d0d2a",
            url:
              "https://media.fyndiq.se/product/ae/a6/91/cb3327a61b30fdd1848efbe38fd9448b57/original.png",
          },
        ],
        old_price: {
          formatted: "129 kr",
          amount: 129,
          currency: "SEK",
        },
        price: {
          formatted: "39 kr",
          amount: 39,
          currency: "SEK",
        },
        product_id: "2bfb074ca793adcca8d4f23dec3fe11b",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug: "2-pack-iphone-7-8-plus-hardat-glas-skarmskydd-ded79b6758bb4633",
        title: "2-Pack - iPhone 7/8 Plus - Härdat Glas Skärmskydd",
        averageRating: "4.0",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "e521b3a1-c0c5-4939-a292-29bb3ea74bee",
        article_url: "/produkt/iphone-11-transparent-tpu-e521b3a1c0c54939",
        images: [
          {
            cloudinaryId:
              "prod/191e98a8139c4650/iphone-11-transparent-tpu-2734f",
            url:
              "https://quickbutik.imgix.net/22224f/products/5f33d622aa12e.jpeg",
          },
        ],
        old_price: {
          formatted: "199 kr",
          amount: 199,
          currency: "SEK",
        },
        price: {
          formatted: "39 kr",
          amount: 39,
          currency: "SEK",
        },
        product_id: "7fe9f7f2c762ed84412f0e97366ec8e1",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug: "iphone-11-transparent-tpu-e521b3a1c0c54939",
        title: "iPhone 11 - Transparent TPU",
        averageRating: "4.1",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "d8d4b8a1-4c6d-402f-b341-8ae8844f216d",
        article_url:
          "/produkt/2-pack-iphone-7-8-hardat-glas-skarmskydd-d8d4b8a14c6d402f",
        images: [
          {
            cloudinaryId:
              "prod/b2287cb0827f496e/2-pack-iphone-6-7-8-se-11-xr-x-xs-11-pro-xs-max-skarmskydd-iphone-se-2020-197db",
            url: "https://i.imgur.com/0mGWyuw.png",
          },
        ],
        old_price: {
          formatted: "299 kr",
          amount: 299,
          currency: "SEK",
        },
        price: {
          formatted: "35 kr",
          amount: 35,
          currency: "SEK",
        },
        product_id: "60114d575a032fdc093cf160088466d1",
        shipping_time_max: "2",
        shipping_time_min: "1",
        slug: "2-pack-iphone-7-8-hardat-glas-skarmskydd-d8d4b8a14c6d402f",
        title: "2-Pack - iPhone 7/8  Härdat Glas Skärmskydd",
        averageRating: "3.7",
        expectedDeliveryDate: "2021-04-09",
      },
      {
        article_id: "22355830-6986-4631-b9ca-193999d5d7ba",
        article_url:
          "/produkt/2-pack-iphone-x-xs-extra-stark-hardat-glas-skarmskydd-2235583069864631",
        images: [
          {
            cloudinaryId:
              "prod/b2287cb0827f496e/2-pack-heltackande-iphone-skarmskydd-i-flera-sorter-iphone-xr-77c21",
            url: "https://i.imgur.com/EtF9OtZ.jpg",
          },
        ],
        old_price: {
          formatted: "299 kr",
          amount: 299,
          currency: "SEK",
        },
        price: {
          formatted: "49 kr",
          amount: 49,
          currency: "SEK",
        },
        product_id: "24fd6b351d97c2314906932fc8fa70ca",
        shipping_time_max: "2",
        shipping_time_min: "1",
        slug:
          "2-pack-iphone-x-xs-extra-stark-hardat-glas-skarmskydd-2235583069864631",
        title: "2-Pack - iPhone X/Xs - Extra Stark Härdat Glas Skärmskydd",
        averageRating: "4.1",
        expectedDeliveryDate: "2021-04-09",
      },
      {
        article_id: "060632e4-84ce-4586-8af6-c9cd99e5beef",
        article_url:
          "/produkt/2-pack-laddare-till-iphone-samsung-mfl-5v-1a-060632e484ce4586",
        images: [
          {
            cloudinaryId:
              "prod/12ce252327084eaa/2-universell-1a-vaggladdare-moto-nokia-htc-lg-godkand-80da5a0193a9",
            url: "http://cables.ws/fiberSWE/new2packEU1AMP.jpg",
          },
        ],
        old_price: {
          formatted: "299 kr",
          amount: 299,
          currency: "SEK",
        },
        price: {
          formatted: "89 kr",
          amount: 89,
          currency: "SEK",
        },
        product_id: "331edec392aae62382c5b5f38613cad7",
        shipping_time_max: "2",
        shipping_time_min: "1",
        slug: "2-pack-laddare-till-iphone-samsung-mfl-5v-1a-060632e484ce4586",
        title: "2 Pack Laddare till iPhone / Samsung mfl 5V / 1A",
        averageRating: "4.2",
        expectedDeliveryDate: "2021-04-09",
      },
      {
        article_id: "283cd69c-1a80-4d1f-8f31-1feb9dbf4a32",
        article_url:
          "/produkt/2-pack-hardat-glas-for-iphone-xr-283cd69c1a804d1f",
        images: [
          {
            cloudinaryId:
              "prod/f65fde5be866458a/2-pack-hardat-glas-for-iphone-xr-1858e",
            url:
              "https://media.fyndiq.se/product/3d/2a/d9/5e01d9c397e3d179faa878801d77890bd1/original.png",
          },
        ],
        old_price: {
          formatted: "299 kr",
          amount: 299,
          currency: "SEK",
        },
        price: {
          formatted: "39 kr",
          amount: 39,
          currency: "SEK",
        },
        product_id: "dfba302e983d2db9b393ac94ac9f697a",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug: "2-pack-hardat-glas-for-iphone-xr-283cd69c1a804d1f",
        title: "2-Pack härdat glas för iPhone Xr",
        averageRating: "4.0",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "7a176b3a-6582-4d7e-86c9-6b2e591a7be3",
        article_url:
          "/produkt/2-pack-universal-mobil-planbok-korthallare-sjalvhaftande-svart-7a176b3a65824d7e",
        images: [
          {
            cloudinaryId:
              "prod/191e98a8139c4650/2-pack-universal-mobil-planbok-korthallare-sjalvhaftande-svart-02da4",
            url:
              "https://quickbutik.imgix.net/22224f/products/5f32613b3491e.png",
          },
        ],
        old_price: {
          formatted: "199 kr",
          amount: 199,
          currency: "SEK",
        },
        price: {
          formatted: "39 kr",
          amount: 39,
          currency: "SEK",
        },
        product_id: "4c0262b529b15919254f18eea53e5722",
        shipping_time_max: "5",
        shipping_time_min: "1",
        slug:
          "2-pack-universal-mobil-planbok-korthallare-sjalvhaftande-svart-7a176b3a65824d7e",
        title:
          "2-pack Universal Mobil plånbok/korthållare - Självhäftande svart",
        averageRating: "4.2",
        expectedDeliveryDate: "2021-04-14",
      },
      {
        article_id: "65bf999a-aeac-4d1c-963c-9df87a19dad0",
        article_url:
          "/produkt/2st-hardat-glas-iphone-12-pro-max-skarmskydd-transparent-65bf999aaeac4d1c",
        images: [
          {
            cloudinaryId:
              "prod/a54a1ec69ec14256/2st-hardat-glas-iphone-12-pro-max-skarmskydd-transparent-08e5e",
            url:
              "https://images.sello.io/products/acc/15363/52655789d125b1480a4682de1bf94d13675a1c56.jpg",
          },
        ],
        old_price: {
          formatted: "89 kr",
          amount: 89,
          currency: "SEK",
        },
        price: {
          formatted: "39 kr",
          amount: 39,
          currency: "SEK",
        },
        product_id: "a03074dca2ab279b7b29d2a991599cee",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug:
          "2st-hardat-glas-iphone-12-pro-max-skarmskydd-transparent-65bf999aaeac4d1c",
        title: "2st Härdat glas iPhone 12 Pro Max  - Skärmskydd Transparent",
        averageRating: "4.4",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "548235bd-c8c9-454a-a84b-b01b7c2bc3fb",
        article_url:
          "/produkt/5-pack-lightning-laddare-iphone-xs-max-x-8-7-6-5se-5s-548235bdc8c9454a",
        images: [
          {
            cloudinaryId:
              "prod/f65fde5be866458a/5-pack-lightning-laddare-iphone-xs-max-x-8-7-6-5se-5s-78eec",
            url:
              "https://teknikhallen.se/upload/Sargons-bilder-2/Kablar/LIGHTNING/Lightning-5pack-02.png",
          },
        ],
        old_price: {
          formatted: "499 kr",
          amount: 499,
          currency: "SEK",
        },
        price: {
          formatted: "89 kr",
          amount: 89,
          currency: "SEK",
        },
        product_id: "daa2b13f0518c7da8be1e5e7425f0ca0",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug:
          "5-pack-lightning-laddare-iphone-xs-max-x-8-7-6-5se-5s-548235bdc8c9454a",
        title: "5-pack - Lightning laddare iPhone Xs/Max/X/8/7/6/5SE/5S",
        averageRating: "4.1",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "50e99a63-4fa6-4916-b9bf-40b6bb825404",
        article_url:
          "/produkt/iphone-charger-for-apple-11-12-usb-c-hurtiglader-20w-vit-50e99a634fa64916",
        images: [
          {
            cloudinaryId:
              "prod/1efd6448fd494e2e/iphone-charger-for-apple-11-12-usb-c-hurtiglader-20w-vit-91991c466e26",
            url:
              "https://images.sello.io/products/acc/46352/51690722ab6f361913fdf98250b4daf0df85ad0f.jpg",
          },
        ],
        old_price: {
          formatted: "299 kr",
          amount: 299,
          currency: "SEK",
        },
        price: {
          formatted: "79 kr",
          amount: 79,
          currency: "SEK",
        },
        product_id: "8a2167ce28fceb7e81aab1ccdf46d65b",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug:
          "iphone-charger-for-apple-11-12-usb-c-hurtiglader-20w-vit-50e99a634fa64916",
        title: "iPhone charger for Apple 11/12 USB-C hurtiglader 20W Vit",
        averageRating: "4.5",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "d785f099-5aeb-48cd-90b2-1d209b92d455",
        article_url:
          "/produkt/2-pack-hardat-glas-for-iphone-6-6s-d785f0995aeb48cd",
        images: [
          {
            cloudinaryId:
              "prod/f65fde5be866458a/2-pack-hardat-glas-for-iphone-7-plus-8-plus-2fda5",
            url:
              "https://media.fyndiq.se/product/82/92/a0/5f29c11b16b07764a929a3393d7d2709a4/original.png",
          },
        ],
        old_price: {
          formatted: "299 kr",
          amount: 299,
          currency: "SEK",
        },
        price: {
          formatted: "39 kr",
          amount: 39,
          currency: "SEK",
        },
        product_id: "182159d89e24b353b4003e0cff02eebd",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug: "2-pack-hardat-glas-for-iphone-6-6s-d785f0995aeb48cd",
        title: "2-Pack härdat glas för iPhone 6/6S",
        averageRating: "3.9",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "55ff95eb-a593-48a1-8158-d55f7fe6afa0",
        article_url:
          "/produkt/2-pack-samsung-galaxy-s20-fe-skarmskydd-i-hardat-glas-55ff95eba59348a1",
        images: [
          {
            cloudinaryId:
              "prod/f65fde5be866458a/2-pack-samsung-galaxy-s20-fe-skarmskydd-i-hardat-glas-cd046",
            url:
              "https://teknikhallen.se/upload/Sargons-bilder-2/Samsung/S-Modeller/S20-FE/Samsung-S20FE-Temp-01.jpg",
          },
        ],
        old_price: {
          formatted: "149 kr",
          amount: 149,
          currency: "SEK",
        },
        price: {
          formatted: "59 kr",
          amount: 59,
          currency: "SEK",
        },
        product_id: "68afd3a4148de5181fd4feef1efb85d9",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug:
          "2-pack-samsung-galaxy-s20-fe-skarmskydd-i-hardat-glas-55ff95eba59348a1",
        title: "2-Pack Samsung Galaxy S20 FE - Skärmskydd i Härdat Glas",
        averageRating: "4.0",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "3257d219-ba14-4a50-9740-3097780e2b50",
        article_url:
          "/produkt/2-pack-samsung-galaxy-a20e-skarmskydd-i-hardat-glas-3257d219ba144a50",
        images: [
          {
            cloudinaryId:
              "prod/f65fde5be866458a/2-pack-samsung-galaxy-a40-skarmskydd-i-hardat-glas-c9989",
            url:
              "https://teknikhallen.se/upload/Sargons-bilder-2/Samsung/Tempered-Glass-Bulk/Sam-A10-A20e-A50-2pack-temp.png",
          },
        ],
        old_price: {
          formatted: "149 kr",
          amount: 149,
          currency: "SEK",
        },
        price: {
          formatted: "45 kr",
          amount: 45,
          currency: "SEK",
        },
        product_id: "0cb911dc2833498538ac54a1dbbb22b0",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug:
          "2-pack-samsung-galaxy-a20e-skarmskydd-i-hardat-glas-3257d219ba144a50",
        title: "2-Pack Samsung Galaxy A20e - Skärmskydd i Härdat Glas",
        averageRating: "3.6",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "9ddba685-ac7d-47a3-b90c-ded41e97bde4",
        article_url:
          "/produkt/3-pack-r-c4u-extra-stark-hardat-glas-skarmskydd-for-iphone-8-7-9ddba685ac7d47a3",
        images: [
          {
            cloudinaryId:
              "prod/60408e00585a4c14/3-pack-r-c4u-extra-stark-hardat-glas-skarmskydd-for-iphone-8-7-6c302",
            url:
              "https://images.sello.io/products/acc/10383/451484039b63abbfd7731af5d0b6d34ffa6d5099.jpg",
          },
        ],
        old_price: {
          formatted: "199 kr",
          amount: 199,
          currency: "SEK",
        },
        price: {
          formatted: "45 kr",
          amount: 45,
          currency: "SEK",
        },
        product_id: "78b4c62064784fd7af4c25109f4f5918",
        shipping_time_max: "2",
        shipping_time_min: "1",
        slug:
          "3-pack-r-c4u-extra-stark-hardat-glas-skarmskydd-for-iphone-8-7-9ddba685ac7d47a3",
        title:
          "3-pack ®C4U Extra Stark Härdat Glas Skärmskydd för iPhone 8/ 7  ",
        averageRating: "4.3",
        expectedDeliveryDate: "2021-04-09",
      },
      {
        article_id: "b74e5c7e-f0f2-46d4-96c6-847a085fc73f",
        article_url:
          "/produkt/samsung-galaxy-s21-transparent-tpu-skal-b74e5c7ef0f246d4",
        images: [
          {
            cloudinaryId:
              "prod/f65fde5be866458a/samsung-galaxy-s21-transparent-tpu-skal-4cdb4133bdfc",
            url:
              "https://teknikhallen.se/upload/Sargons-bilder-2/Samsung/S-Modeller/S21/S21-TPU.jpg",
          },
        ],
        old_price: {
          formatted: "149 kr",
          amount: 149,
          currency: "SEK",
        },
        price: {
          formatted: "39 kr",
          amount: 39,
          currency: "SEK",
        },
        product_id: "1e03c3e5d1fa99e3771893e565ea22b7",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug: "samsung-galaxy-s21-transparent-tpu-skal-b74e5c7ef0f246d4",
        title: "Samsung Galaxy S21 - Transparent TPU Skal",
        averageRating: "4.1",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "a55d7bd3-6015-4beb-a214-d0c50f9156f2",
        article_url:
          "/produkt/iphone-magnetisk-magsafe-laddare-a55d7bd360154beb",
        images: [
          {
            cloudinaryId:
              "prod/191e98a8139c4650/iphone-magnetisk-magsafe-laddare-bfdbaf6c5c2e",
            url:
              "https://quickbutik.imgix.net/22224f/products/5fe5b488aea37.jpeg",
          },
        ],
        old_price: {
          formatted: "169 kr",
          amount: 169,
          currency: "SEK",
        },
        price: {
          formatted: "99 kr",
          amount: 99,
          currency: "SEK",
        },
        product_id: "81bc0719be3998b04aa8bad85beb6d5e",
        shipping_time_max: "5",
        shipping_time_min: "1",
        slug: "iphone-magnetisk-magsafe-laddare-a55d7bd360154beb",
        title: "iPhone Magnetisk Magsafe Laddare",
        averageRating: "4.2",
        expectedDeliveryDate: "2021-04-14",
      },
      {
        article_id: "f317c726-3b55-4431-9a1c-fb5538300205",
        article_url:
          "/produkt/iphone-se-2020-8-7-silicone-case-ultra-slim-skal-svart-f317c7263b554431",
        images: [
          {
            cloudinaryId:
              "prod/e714e53c311c45dd/iphone-se-2020-8-7-silicone-case-ultra-slim-skal-svart-a8135",
            url:
              "https://images.sello.io/products/acc/32238/4892754871c6481f6b334249e21131ce39ea1f44.jpg",
          },
        ],
        old_price: {
          formatted: "229 kr",
          amount: 229,
          currency: "SEK",
        },
        price: {
          formatted: "39 kr",
          amount: 39,
          currency: "SEK",
        },
        product_id: "b9b40af002a505efbdef550ac563dd7f",
        shipping_time_max: "5",
        shipping_time_min: "1",
        slug:
          "iphone-se-2020-8-7-silicone-case-ultra-slim-skal-svart-f317c7263b554431",
        title: "iPhone SE 2020/8/7 Silicone Case - Ultra-Slim Skal Svart",
        averageRating: "4.5",
        expectedDeliveryDate: "2021-04-14",
      },
      {
        article_id: "18919645-295b-483b-a1d4-058b0543ceb3",
        article_url:
          "/produkt/iphone-12-pro-max-67-inch-tpu-skal-slimmat-18919645295b483b",
        images: [
          {
            cloudinaryId:
              "prod/191e98a8139c4650/iphone-12-pro-max-67-inch-tpu-skal-slimmat-b2a43",
            url:
              "https://quickbutik.imgix.net/22224f/products/5fa58c97b2cb2.jpeg",
          },
        ],
        old_price: {
          formatted: "199 kr",
          amount: 199,
          currency: "SEK",
        },
        price: {
          formatted: "39 kr",
          amount: 39,
          currency: "SEK",
        },
        product_id: "6672792e1dfeb5ff733a249cc2719a13",
        shipping_time_max: "5",
        shipping_time_min: "1",
        slug: "iphone-12-pro-max-67-inch-tpu-skal-slimmat-18919645295b483b",
        title: "iPhone 12 Pro Max 6,7 Inch TPU Skal - Slimmat",
        averageRating: "4.0",
        expectedDeliveryDate: "2021-04-14",
      },
      {
        article_id: "b5781845-bc84-4232-be02-e2d51fc47ec5",
        article_url:
          "/produkt/3-pack-iphone-x-xs-11-pro-skarmskydd-hardat-glas-b5781845bc844232",
        images: [
          {
            cloudinaryId:
              "prod/6d95a0cf29a54329/3-pack-iphone-x-xs-11-pro-hardat-glas-skarmskydd-fsc-52a59",
            url:
              "http://file.plugboard.io/newangle/AAfqga4pYHqK301-mcg1YFZRbWGbNw/GadgetMe%203-Pack%20iPhone%20X%2FXs%2F11%20Pro%20H%C3%A4rdat%20Glas%20Sk%C3%A4rmskydd%20FSC.jpg",
          },
        ],
        old_price: null,
        price: {
          formatted: "49 kr",
          amount: 49,
          currency: "SEK",
        },
        product_id: "36142969079acacc103dd4e9ccda30e8",
        shipping_time_max: "5",
        shipping_time_min: "1",
        slug:
          "3-pack-iphone-x-xs-11-pro-skarmskydd-hardat-glas-b5781845bc844232",
        title: "3-Pack iPhone X/Xs/11 Pro Skärmskydd Härdat Glas",
        averageRating: "3.9",
        expectedDeliveryDate: "2021-04-14",
      },
      {
        article_id: "1b1dc4b2-2c48-449a-839b-43a1e45a0692",
        article_url:
          "/produkt/samsung-galaxy-a21s-2-pack-skarmskydd-i-hardat-glas-1b1dc4b22c48449a",
        images: [
          {
            cloudinaryId:
              "prod/f65fde5be866458a/samsung-galaxy-a21s-2-pack-skarmskydd-i-hardat-glas-b7d1e",
            url:
              "https://teknikhallen.se/upload/Sargons-bilder-2/Samsung/A-Modeller/a21s/Samsung-A21s-Temp-01.jpg",
          },
        ],
        old_price: {
          formatted: "199 kr",
          amount: 199,
          currency: "SEK",
        },
        price: {
          formatted: "59 kr",
          amount: 59,
          currency: "SEK",
        },
        product_id: "4cbf5d3c65b487ea2402513f00173cd6",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug:
          "samsung-galaxy-a21s-2-pack-skarmskydd-i-hardat-glas-1b1dc4b22c48449a",
        title: "Samsung Galaxy A21s - 2-Pack - Skärmskydd i Härdat Glas",
        averageRating: "4.4",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "5eab5367-1231-42fd-8cca-a5c94c32d378",
        article_url:
          "/produkt/3-pack-iphone-11-xr-hardat-glas-skarmskydd-5eab5367123142fd",
        images: [
          {
            cloudinaryId:
              "prod/6d95a0cf29a54329/3-pack-iphone-11-xr-gadgetme-hardat-glas-skarmskydd-fsc-2fa61",
            url:
              "http://file.plugboard.io/newangle/AAfqga4pYHqK301-mcgG3HA-Xqygtg/GadgetMe%203-Pack%20iPhone%20X%2FXs%2F11%20Pro%20H%C3%A4rdat%20Glas%20Sk%C3%A4rmskydd%20FSC.jpg",
          },
        ],
        old_price: null,
        price: {
          formatted: "49 kr",
          amount: 49,
          currency: "SEK",
        },
        product_id: "20de464048f7bd219aa6b4758ede4b81",
        shipping_time_max: "5",
        shipping_time_min: "1",
        slug: "3-pack-iphone-11-xr-hardat-glas-skarmskydd-5eab5367123142fd",
        title: "3-Pack iPhone 11/XR Härdat Glas Skärmskydd",
        averageRating: "4.5",
        expectedDeliveryDate: "2021-04-14",
      },
      {
        article_id: "5ef15932-a12f-4977-9206-c1b940a92eb5",
        article_url:
          "/produkt/kameralins-skydd-alla-modeller-s21-samsung-galaxy-s21-5ef15932a12f4977",
        images: [
          {
            cloudinaryId:
              "prod/a64cf5131897485c/kameralins-skydd-samsung-galaxy-s21-da5698a73fb4",
            url:
              "https://s3-eu-west-1.amazonaws.com/storage.quickbutik.com/stores/18363U/products/6020fb514b92b.jpeg",
          },
        ],
        old_price: {
          formatted: "99 kr",
          amount: 99,
          currency: "SEK",
        },
        price: {
          formatted: "49 kr",
          amount: 49,
          currency: "SEK",
        },
        product_id: "e7949b3859290c1c86c1fb9f676bcec2",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug:
          "kameralins-skydd-alla-modeller-s21-samsung-galaxy-s21-5ef15932a12f4977",
        title: "Kameralins skydd Alla modeller S21 Samsung Galaxy  S21 ",
        averageRating: "4.4",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "f6eee40a-5623-4186-84d5-11423f0a67b6",
        article_url:
          "/produkt/2-pack-iphone-se-2020-skarmskydd-i-hardat-glas-0-26mm-f6eee40a56234186",
        images: [
          {
            cloudinaryId:
              "prod/89b67da9f35e4560/2-pack-iphone-se-2020-skarmskydd-i-hardat-glas-0-26mm-d7647",
            url:
              "https://images.sello.io/products/acc/39782/48708158a78e6d7146bf54984a7cbc60ce8036d1.jpg",
          },
        ],
        old_price: {
          formatted: "299 kr",
          amount: 299,
          currency: "SEK",
        },
        price: {
          formatted: "69 kr",
          amount: 69,
          currency: "SEK",
        },
        product_id: "797da668f673650be45e01d6adc15c5f",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug:
          "2-pack-iphone-se-2020-skarmskydd-i-hardat-glas-0-26mm-f6eee40a56234186",
        title: "2-Pack - iPhone SE (2020) - Skärmskydd i Härdat Glas, 0.26mm",
        averageRating: "4.2",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "f61d9c90-7ac8-4297-bbc5-977f38290a11",
        article_url:
          "/produkt/iphone-12-12-pro-silikon-shockproof-skal-extra-stot-taligt-transparent-f61d9c907ac84297",
        images: [
          {
            cloudinaryId:
              "prod/a54a1ec69ec14256/iphone-12-pro-silikon-shockproof-skal-extra-stot-taligt-transparent-f0106",
            url:
              "https://images.sello.io/products/acc/15363/51759004ba9889c38e23fa34e2a28f164a4a8214.jpg",
          },
        ],
        old_price: {
          formatted: "99 kr",
          amount: 99,
          currency: "SEK",
        },
        price: {
          formatted: "59 kr",
          amount: 59,
          currency: "SEK",
        },
        product_id: "6ef6d9003c73a6326b274ad1189b2551",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug:
          "iphone-12-12-pro-silikon-shockproof-skal-extra-stot-taligt-transparent-f61d9c907ac84297",
        title:
          "iPhone 12 / 12 Pro Silikon Shockproof Skal extra stöt tåligt Transparent",
        averageRating: "4.5",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "01b8f5d9-035d-45cf-9ccb-8a63c8887c76",
        article_url:
          "/produkt/3-pack-2-m-lightning-laddare-iphone-x-8-8-7-7-6s-6-5se-5l-01b8f5d9035d45cf",
        images: [
          {
            cloudinaryId:
              "prod/88608eb287604569/3-pack-2-meter-lightning-laddare-iphone-x-8-8-7-7-6s-6-5se-5-97513",
            url:
              "https://s3-eu-west-1.amazonaws.com/storage.quickbutik.com/stores/4777z/products/5ad305ed43a18.jpeg",
          },
        ],
        old_price: {
          formatted: "299 kr",
          amount: 299,
          currency: "SEK",
        },
        price: {
          formatted: "99 kr",
          amount: 99,
          currency: "SEK",
        },
        product_id: "ee30d5cd58bfdeb8c324d3bb7b4c3c0f",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug:
          "3-pack-2-m-lightning-laddare-iphone-x-8-8-7-7-6s-6-5se-5l-01b8f5d9035d45cf",
        title: "3-pack 2 m / Lightning laddare iPhone X/8/8+/7/7+/6S/6/5SE/5l",
        averageRating: "3.9",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "24d70648-335a-4891-a7ad-d2fbc9f7d4da",
        article_url:
          "/produkt/iphone-7-8-se-2020-skal-extra-stottaligt-24d70648335a4891",
        images: [
          {
            cloudinaryId:
              "prod/191e98a8139c4650/iphone-7-8-se-2020-skal-extra-stottaligt-59eb0",
            url:
              "https://quickbutik.imgix.net/22224f/products/5f313da955974.jpeg",
          },
        ],
        old_price: {
          formatted: "199 kr",
          amount: 199,
          currency: "SEK",
        },
        price: {
          formatted: "49 kr",
          amount: 49,
          currency: "SEK",
        },
        product_id: "894fdb01321f4dc69073688833998a6d",
        shipping_time_max: "5",
        shipping_time_min: "1",
        slug: "iphone-7-8-se-2020-skal-extra-stottaligt-24d70648335a4891",
        title: "iPhone 7 / 8 / SE (2020) Skal - Extra Stöttåligt",
        averageRating: "4.4",
        expectedDeliveryDate: "2021-04-14",
      },
      {
        article_id: "2c292c54-77c9-4c15-b864-2b1bffbd72bc",
        article_url:
          "/produkt/iphone-kabel-for-apple-11-12-usb-c-till-lightning-1m-vit-2c292c5477c94c15",
        images: [
          {
            cloudinaryId:
              "prod/1efd6448fd494e2e/iphone-apple-11-12-lightning-for-usb-c-1m-vit-3173e",
            url:
              "https://images.sello.io/products/acc/46352/52541521f353aecb055ecfa462c648bcdbcd5e6a.jpg",
          },
        ],
        old_price: {
          formatted: "199 kr",
          amount: 199,
          currency: "SEK",
        },
        price: {
          formatted: "99 kr",
          amount: 99,
          currency: "SEK",
        },
        product_id: "5d50d5ea6448f8c73839db3990e2fde6",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug:
          "iphone-kabel-for-apple-11-12-usb-c-till-lightning-1m-vit-2c292c5477c94c15",
        title: "iPhone kabel för Apple 11/12 USB-C till Lightning  1M Vit",
        averageRating: "4.5",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "894b1177-0fd5-4a52-aa94-72104e924368",
        article_url:
          "/produkt/silikonskal-till-iphone-11-sand-pink-rosa-894b11770fd54a52",
        images: [
          {
            cloudinaryId:
              "prod/e714e53c311c45dd/silikonskal-till-iphone-11-sand-pink-rosa-c3b837380532",
            url:
              "https://images.sello.io/products/acc/32238/537263492d94db4c4449f0d02370451145c6e831.jpg",
          },
        ],
        old_price: {
          formatted: "249 kr",
          amount: 249,
          currency: "SEK",
        },
        price: {
          formatted: "39 kr",
          amount: 39,
          currency: "SEK",
        },
        product_id: "49adeee2af65a4bd073bd76d3cdb9927",
        shipping_time_max: "5",
        shipping_time_min: "1",
        slug: "silikonskal-till-iphone-11-sand-pink-rosa-894b11770fd54a52",
        title: "Silikonskal till iPhone 11 - Sand Pink Rosa",
        averageRating: "4.2",
        expectedDeliveryDate: "2021-04-14",
      },
      {
        article_id: "f1df0586-8f25-4d31-b014-2eb1b5aa3ef1",
        article_url:
          "/produkt/2m-lightning-3a-kabel-laddsladd-snabbladdning-f1df05868f254d31",
        images: [
          {
            cloudinaryId:
              "prod/d272cd37f0884336/2m-lightning-3a-kabel-laddsladd-snabbladdning-53b47997fef4",
            url:
              "https://images.sello.io/products/acc/48603/54624964a8c547cb1b7825d565e20b4131d21768.jpg",
          },
        ],
        old_price: null,
        price: {
          formatted: "75 kr",
          amount: 75,
          currency: "SEK",
        },
        product_id: "1eea498f6d3bf27f7982c392355a460a",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug: "2m-lightning-3a-kabel-laddsladd-snabbladdning-f1df05868f254d31",
        title: "2m - Lightning 3A - /kabel/laddsladd/ snabbladdning",
        averageRating: "4.6",
        expectedDeliveryDate: "2021-04-12",
      },
      {
        article_id: "167a2395-022b-4f39-bcb8-baf7fbc23cbd",
        article_url:
          "/produkt/3-pack-hardat-glas-for-iphone-xs-max-167a2395022b4f39",
        images: [
          {
            cloudinaryId:
              "prod/f65fde5be866458a/3-pack-hardat-glas-for-iphone-xs-max-094c7",
            url:
              "https://teknikhallen.se/upload/Sargons-bilder-2/iPhone/Tempered-Glass/iPhone-XsMax-11-3pack-2.png",
          },
        ],
        old_price: {
          formatted: "199 kr",
          amount: 199,
          currency: "SEK",
        },
        price: {
          formatted: "49 kr",
          amount: 49,
          currency: "SEK",
        },
        product_id: "83fa725d71659425febcbf7b15707726",
        shipping_time_max: "3",
        shipping_time_min: "1",
        slug: "3-pack-hardat-glas-for-iphone-xs-max-167a2395022b4f39",
        title: "3-Pack härdat glas för iPhone Xs Max",
        averageRating: "4.8",
        expectedDeliveryDate: "2021-04-12",
      },
    ],
  } as ProductsResponse);
}

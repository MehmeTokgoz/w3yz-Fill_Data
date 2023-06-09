import axios from "axios";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

function FillData() {
  const [data, setData] = useState({ products: [] });

  //Getting all data:
  const getAllData = async () => {
    try {
      const response = await axios.get("https://w3yz.com/api/ch");
      //Assign the data to a variable:
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  useEffect(() => {
    /// Filling data randomly, using faker.js and Math.random methods:
    const newProduct = {
      products: [
        {
          id: 38,
          parent_id: 0,
          name: "Artemisia Gentileschi",
          brand: "Sample Gallery",
          body: faker.lorem.sentences(),
          price: Math.floor(Math.random() * 1000) + 1,
          tax: Math.floor(Math.random() * 1000) + 1,
          sku: Math.floor(Math.random() * 1000) + 1,
          barcode: Math.floor(Math.random() * 1000) + 1,
          quantity: Math.floor(Math.random() * 1000) + 1,
          weight: Math.floor(Math.random() * 1000) + 1,
          weightunit: Math.floor(Math.random() * 1000) + 1,
          height: Math.floor(Math.random() * 1000) + 1,
          width: Math.floor(Math.random() * 1000) + 1,
          length: Math.floor(Math.random() * 1000) + 1,
          dimensionunit: Math.floor(Math.random() * 1000) + 1,
          shippingtype: Math.floor(Math.random() * 1000) + 1,
          keepsellingoutofstock: Math.floor(Math.random() * 1000) + 1,
          followquantity: Math.floor(Math.random() * 1000) + 1,
          seoindex: Math.floor(Math.random() * 1000) + 1,
          seotitle: Math.floor(Math.random() * 1000) + 1,
          seodesc: faker.lorem.sentences(),
          status: 0,
          deleted_at: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          visit: Math.floor(Math.random() * 1000) + 1,
          fav: Math.floor(Math.random() * 1000) + 1,

          imagelist: [
            {
              id: 15,
              product_id: 38,
              url: "https://cdn.w3yz.com/images/host2000/Rectangle2940_20230509134144_645a4d98cc91b.webp",
              main: 1,
              seo_title: faker.lorem.words(),
              deleted_at: null,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
          ],
          child_list: [],
        },
        {
          id: 37,
          parent_id: 0,
          name: "Rembrandt",
          brand: "Sample Gallery",
          body: faker.lorem.sentences(),
          tax: Math.floor(Math.random() * 1000) + 1,
          sku: Math.floor(Math.random() * 1000) + 1,
          barcode: Math.floor(Math.random() * 1000) + 1,
          quantity: 0,
          weight: 0,
          weightunit: Math.floor(Math.random() * 1000) + 1,
          height: Math.floor(Math.random() * 1000) + 1,
          width: Math.floor(Math.random() * 1000) + 1,
          length: 0,
          dimensionunit: Math.floor(Math.random() * 1000) + 1,
          shippingtype: Math.floor(Math.random() * 1000) + 1,
          keepsellingoutofstock: Math.floor(Math.random() * 1000) + 1,
          followquantity: Math.floor(Math.random() * 1000) + 1,
          seoindex: Math.floor(Math.random() * 1000) + 1,
          seotitle: Math.floor(Math.random() * 1000) + 1,
          seodesc: faker.lorem.sentences(),
          status: 0,
          deleted_at: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          visit: Math.floor(Math.random() * 1000) + 1,
          fav: Math.floor(Math.random() * 1000) + 1,
          imagelist: [
            {
              id: 14,
              product_id: 37,
              url: "https://cdn.w3yz.com/images/host2000/Rectangle2939_20230509134130_645a4d8a09a06.webp",
              main: 1,
              seo_title: faker.lorem.words(),
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
          ],
          child_list: [],
        },
        {
          id: 36,
          parent_id: 0,
          name: "J.M.W. Turner",
          brand: "Sample Gallery",
          body: faker.lorem.sentences(),
          tax: Math.floor(Math.random() * 1000) + 1,
          sku: Math.floor(Math.random() * 1000) + 1,
          barcode: Math.floor(Math.random() * 1000) + 1,
          quantity: 0,
          weight: 0,
          weightunit: Math.floor(Math.random() * 1000) + 1,
          height: Math.floor(Math.random() * 1000) + 1,
          width: Math.floor(Math.random() * 1000) + 1,
          length: 0,
          dimensionunit: Math.floor(Math.random() * 1000) + 1,
          shippingtype: Math.floor(Math.random() * 1000) + 1,
          keepsellingoutofstock: Math.floor(Math.random() * 1000) + 1,
          followquantity: Math.floor(Math.random() * 1000) + 1,
          seoindex: Math.floor(Math.random() * 1000) + 1,
          seotitle: Math.floor(Math.random() * 1000) + 1,
          seodesc: faker.lorem.sentences(),
          status: 0,
          deleted_at: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          visit: Math.floor(Math.random() * 1000) + 1,
          fav: Math.floor(Math.random() * 1000) + 1,
          imagelist: [
            {
              id: 13,
              product_id: 36,
              url: "https://cdn.w3yz.com/images/host2000/Rectangle2937_20230509134108_645a4d742db1b.webp",
              main: 1,
              seo_title: faker.lorem.words(),
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
          ],
          child_list: [],
        },
        {
          id: 35,
          parent_id: 0,
          name: "Paul Cézanne",
          brand: "Sample Gallery",
          body: faker.lorem.sentences(),
          tax: Math.floor(Math.random() * 1000) + 1,
          sku: Math.floor(Math.random() * 1000) + 1,
          barcode: Math.floor(Math.random() * 1000) + 1,
          quantity: 0,
          weight: 0,
          weightunit: Math.floor(Math.random() * 1000) + 1,
          height: Math.floor(Math.random() * 1000) + 1,
          width: Math.floor(Math.random() * 1000) + 1,
          length: 0,
          dimensionunit: Math.floor(Math.random() * 1000) + 1,
          shippingtype: Math.floor(Math.random() * 1000) + 1,
          keepsellingoutofstock: Math.floor(Math.random() * 1000) + 1,
          followquantity: Math.floor(Math.random() * 1000) + 1,
          seoindex: Math.floor(Math.random() * 1000) + 1,
          seotitle: Math.floor(Math.random() * 1000) + 1,
          seodesc: faker.lorem.sentences(),
          status: 0,
          deleted_at: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          visit: Math.floor(Math.random() * 1000) + 1,
          fav: Math.floor(Math.random() * 1000) + 1,
          imagelist: [
            {
              id: 10,
              product_id: 35,
              url: "https://cdn.w3yz.com/images/host2000/MaskGroup-7_20230509134008_645a4d38b8bb6.webp",
              main: 1,
              seo_title: faker.lorem.words(),
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
          ],
          child_list: [],
        },
        {
          id: 34,
          parent_id: 0,
          name: "Claude Monet",
          brand: "Sample Gallery",
          body: faker.lorem.sentences(),
          tax: Math.floor(Math.random() * 1000) + 1,
          sku: Math.floor(Math.random() * 1000) + 1,
          barcode: Math.floor(Math.random() * 1000) + 1,
          quantity: 0,
          weight: 0,
          weightunit: Math.floor(Math.random() * 1000) + 1,
          height: Math.floor(Math.random() * 1000) + 1,
          width: Math.floor(Math.random() * 1000) + 1,
          length: 0,
          dimensionunit: Math.floor(Math.random() * 1000) + 1,
          shippingtype: Math.floor(Math.random() * 1000) + 1,
          keepsellingoutofstock: Math.floor(Math.random() * 1000) + 1,
          followquantity: Math.floor(Math.random() * 1000) + 1,
          seoindex: Math.floor(Math.random() * 1000) + 1,
          seotitle: Math.floor(Math.random() * 1000) + 1,
          seodesc: faker.lorem.sentences(),
          status: 0,
          deleted_at: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          visit: Math.floor(Math.random() * 1000) + 1,
          fav: Math.floor(Math.random() * 1000) + 1,
          imagelist: [
            {
              id: 11,
              product_id: 34,
              url: "https://cdn.w3yz.com/images/host2000/MaskGroup_20230509134017_645a4d41ab169.webp",
              main: 1,
              seo_title: faker.lorem.words(),
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
          ],
          child_list: [],
        },
        {
          id: 7,
          parent_id: 0,
          name: "Leonardo",
          brand: "Sample Gallery",
          body: faker.lorem.sentences(),
          tax: Math.floor(Math.random() * 1000) + 1,
          sku: Math.floor(Math.random() * 1000) + 1,
          barcode: Math.floor(Math.random() * 1000) + 1,
          quantity: 0,
          weight: 0,
          weightunit: Math.floor(Math.random() * 1000) + 1,
          height: Math.floor(Math.random() * 1000) + 1,
          width: Math.floor(Math.random() * 1000) + 1,
          length: 0,
          dimensionunit: Math.floor(Math.random() * 1000) + 1,
          shippingtype: Math.floor(Math.random() * 1000) + 1,
          keepsellingoutofstock: Math.floor(Math.random() * 1000) + 1,
          followquantity: Math.floor(Math.random() * 1000) + 1,
          seoindex: Math.floor(Math.random() * 1000) + 1,
          seotitle: Math.floor(Math.random() * 1000) + 1,
          seodesc: faker.lorem.sentences(),
          status: 0,
          deleted_at: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          visit: Math.floor(Math.random() * 1000) + 1,
          fav: Math.floor(Math.random() * 1000) + 1,
          imagelist: [
            {
              id: 12,
              product_id: 7,
              url: "https://cdn.w3yz.com/images/host2000/Rectangle2937_20230509134040_645a4d584b9eb.webp",
              main: 1,
              seo_title: faker.lorem.words(),
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
          ],
          child_list: [],
        },
        {
          id: 6,
          parent_id: 0,
          name: "Leonardo da Vinci",
          brand: "Sample Gallery",
          body: "<p>Geliştirilmiş Ortholite&reg; i&ccedil; tabanla daha fazla rahatlık sunan Authentic 44 Deck DX orijinal &uuml;r&uuml;n kodu, y&uuml;ksek, cilalı taban duvarı, orijinal dokulu pamuklu kumaş astar ağırlığı ve koton bağcıklar gibi nostaljik detaylara sahiptir. Vintage &uuml;r&uuml;nlerden ilham alan kumaş &uuml;st par&ccedil;alar bu klasik bağcıklı ayakkabının g&ouml;r&uuml;n&uuml;m&uuml;n&uuml; tamamlar.<br />\n&nbsp;</p>",
          price: Math.floor(Math.random() * 1000) + 1,
          tax: Math.floor(Math.random() * 1000) + 1,
          sku: Math.floor(Math.random() * 1000) + 1,
          barcode: Math.floor(Math.random() * 1000) + 1,
          quantity: 898,
          weight: 0,
          weightunit: Math.floor(Math.random() * 1000) + 1,
          height: Math.floor(Math.random() * 1000) + 1,
          width: Math.floor(Math.random() * 1000) + 1,
          length: 0,
          dimensionunit: Math.floor(Math.random() * 1000) + 1,
          shippingtype: Math.floor(Math.random() * 1000) + 1,
          keepsellingoutofstock: Math.floor(Math.random() * 1000) + 1,
          followquantity: Math.floor(Math.random() * 1000) + 1,
          seoindex: Math.floor(Math.random() * 1000) + 1,
          seotitle: "AUTHENTIC 44 DECK DX",
          seodesc: "AUTHENTIC 44 DECK DX",
          status: 0,
          deleted_at: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          visit: Math.floor(Math.random() * 1000) + 1,
          fav: Math.floor(Math.random() * 1000) + 1,
          imagelist: [
            {
              id: 7,
              product_id: 6,
              url: "https://cdn.w3yz.com/images/host2000/MaskGroup-4_20230509133927_645a4d0fea48f.webp",
              main: 1,
              seo_title: faker.lorem.words(),
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
          ],
          child_list: [],
        },
        {
          id: 5,
          parent_id: 0,
          name: "Michelangelo",
          brand: "Sample Gallery",
          body: "<p>Nike Air Max 270 G ile efsanevi bir stile kavuş. Sil&uuml;et, orijinal b&uuml;y&uuml;k Air ikonuyla dikişlerine kadar aynı yapıya sahiptir. Profesyonel d&uuml;zeyde performans sergileyen yenilik&ccedil;i bir tutuş sunar.</p>",
          price: Math.floor(Math.random() * 1000) + 1,
          tax: Math.floor(Math.random() * 1000) + 1,
          sku: Math.floor(Math.random() * 1000) + 1,
          barcode: Math.floor(Math.random() * 1000) + 1,
          quantity: 5743,
          weight: 0,
          weightunit: Math.floor(Math.random() * 1000) + 1,
          height: Math.floor(Math.random() * 1000) + 1,
          width: Math.floor(Math.random() * 1000) + 1,
          length: 0,
          dimensionunit: Math.floor(Math.random() * 1000) + 1,
          shippingtype: Math.floor(Math.random() * 1000) + 1,
          keepsellingoutofstock: Math.floor(Math.random() * 1000) + 1,
          followquantity: Math.floor(Math.random() * 1000) + 1,
          seoindex: Math.floor(Math.random() * 1000) + 1,
          seotitle: "Nike Black Culture",
          seodesc: "Nike Black Culture",
          status: 0,
          deleted_at: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          visit: Math.floor(Math.random() * 1000) + 1,
          fav: Math.floor(Math.random() * 1000) + 1,
          imagelist: [
            {
              id: 8,
              product_id: 5,
              url: "https://cdn.w3yz.com/images/host2000/MaskGroup-3_20230509133940_645a4d1c79c8f.webp",
              main: 1,
              seo_title: faker.lorem.words(),
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
          ],
          child_list: [],
        },
        {
          id: 4,
          parent_id: 0,
          name: "da Vinci",
          brand: "Sample Gallery",
          body: "<p>Klasik basketbol tasarımına eğlenceli bir yaklaşım getiriyor.Katmanlı bir yaklaşıma, iki kat fazla logoya ve b&uuml;y&uuml;k orta tabana sahip bir model.</p>",
          price: Math.floor(Math.random() * 1000) + 1,
          tax: Math.floor(Math.random() * 1000) + 1,
          sku: Math.floor(Math.random() * 1000) + 1,
          barcode: Math.floor(Math.random() * 1000) + 1,
          quantity: 367,
          weight: 0,
          weightunit: Math.floor(Math.random() * 1000) + 1,
          height: Math.floor(Math.random() * 1000) + 1,
          width: Math.floor(Math.random() * 1000) + 1,
          length: 0,
          dimensionunit: Math.floor(Math.random() * 1000) + 1,
          shippingtype: Math.floor(Math.random() * 1000) + 1,
          keepsellingoutofstock: Math.floor(Math.random() * 1000) + 1,
          followquantity: Math.floor(Math.random() * 1000) + 1,
          seoindex: Math.floor(Math.random() * 1000) + 1,
          seotitle: "Adidas Colorfest",
          seodesc: "Adidas Colorfest",
          status: 0,
          deleted_at: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          visit: Math.floor(Math.random() * 1000) + 1,
          fav: Math.floor(Math.random() * 1000) + 1,
          imagelist: [
            {
              id: 6,
              product_id: 4,
              url: "https://cdn.w3yz.com/images/host2000/MaskGroup-1_20230509133909_645a4cfd05b9b.webp",
              main: 1,
              seo_title: faker.lorem.words(),
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
          ],
          child_list: [],
        },
        {
          id: 2,
          parent_id: 0,
          name: "Raphael",
          brand: "Sample Gallery",
          body: "<p>&Uuml;st kısmındaki destek sunan dayanıklı deri ile seni antrenman yapmaya hazırlar. Hafif k&ouml;p&uuml;k, yastıklamayla bir araya gelerek her adımda rahat etmeni sağlar.</p>",
          price: Math.floor(Math.random() * 1000) + 1,
          tax: Math.floor(Math.random() * 1000) + 1,
          sku: Math.floor(Math.random() * 1000) + 1,
          barcode: Math.floor(Math.random() * 1000) + 1,
          quantity: 200,
          weight: 0,
          weightunit: Math.floor(Math.random() * 1000) + 1,
          height: Math.floor(Math.random() * 1000) + 1,
          width: Math.floor(Math.random() * 1000) + 1,
          length: 0,
          dimensionunit: Math.floor(Math.random() * 1000) + 1,
          shippingtype: Math.floor(Math.random() * 1000) + 1,
          keepsellingoutofstock: Math.floor(Math.random() * 1000) + 1,
          followquantity: Math.floor(Math.random() * 1000) + 1,
          seoindex: Math.floor(Math.random() * 1000) + 1,
          seotitle: "nike fly",
          seodesc: "nike fly",
          status: 0,
          deleted_at: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          visit: Math.floor(Math.random() * 1000) + 1,
          fav: Math.floor(Math.random() * 1000) + 1,
          imagelist: [
            {
              id: 9,
              product_id: 2,
              url: "https://cdn.w3yz.com/images/host2000/MaskGroup-6_20230509133954_645a4d2adddb5.webp",
              main: 1,
              seo_title: faker.lorem.words(),
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
          ],
          child_list: [],
        },
      ],
      categories: [
        {
          id: 3,
          parent_id: 0,
          name: "Gallery",
          seo_desc: "Gallery",
          seo_meta: "Gallery",
          deleted_at: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ],
      menus: {
        top: [
          {
            id: 1078,
            title: "landing",
            url: "/landing2",
            display: 1,
          },
          {
            id: 1088,
            title: "products",
            url: "/products769",
            display: 1,
          },
        ],
        bottom: [],
      },
    };
    console.log(newProduct);

    const updatedData = {
      ...data,
      products: [...data.products, newProduct],
    };

    //Setting data with filled datas:
    setData(updatedData);
    console.log(updatedData);
  }, []);

  //Updating data using put request (It is not allowed)
  const upDateEmptyDatas = async () => {
    try {
      const response = await axios.put("https://w3yz.com/api/ch");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    upDateEmptyDatas();
  }, []);

  return <div></div>;
}
export default FillData;

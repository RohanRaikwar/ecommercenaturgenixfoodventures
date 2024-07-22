"use client"

import React, { useContext, useState,useEffect } from 'react';
import style from './HomePost.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';
import Link from 'next/link';
import ContentControl from '@/ContentControl/ContentControl';
import MockImage from '../../../public/shrimp_farm.jpg';
import Image from 'next/image';
import ProductImage from '../../../public/cart.jpg'
import sliderImage from '../../../public/slideerr.jpg'


const mockData = {
    sectionone: {
        title: "Top Fish Species",
        subTitle: "Best Quality and Fresh",
        items: [
            {
                _id: "1",
                name: "Salmon",
                slug: "salmon",
                uni_id1: "123",
                uni_id2: "456",
                file: { filename: "https://example.com/images/salmon.jpg" }
            },
            {
                _id: "2",
                name: "Tuna",
                slug: "tuna",
                uni_id1: "789",
                uni_id2: "101",
                file: { filename: "https://example.com/images/tuna.jpg" }
            },
            {
                _id: "1",
                name: "Salmon",
                slug: "salmon",
                uni_id1: "123",
                uni_id2: "456",
                file: { filename: "https://example.com/images/salmon.jpg" }
            },
            {
                _id: "2",
                name: "Tuna",
                slug: "tuna",
                uni_id1: "789",
                uni_id2: "101",
                file: { filename: "https://example.com/images/tuna.jpg" }
            },
            {
                _id: "2",
                name: "Tuna",
                slug: "tuna",
                uni_id1: "789",
                uni_id2: "101",
                file: { filename: "https://example.com/images/tuna.jpg" }
            },
           
        ]
    },
    sectiontwo: {
        title: "Fresh Catches",
        subTitle: "Daily Fresh",
        items: [
            {
                _id: "3",
                name: "Mackerel",
                slug: "mackerel",
                category: "Fish",
                discount: 10,
                available: "true",
                price: 300,
                mrp: 350,
                currVariantSize: "1kg",
                uni_id_1: "111",
                uni_id_2: "222",
                files: [{ filename: "https://example.com/images/mackerel.jpg" }]
            },
            {
                _id: "3",
                name: "Mackerel",
                slug: "mackerel",
                category: "Fish",
                discount: 10,
                available: "true",
                price: 300,
                mrp: 350,
                currVariantSize: "1kg",
                uni_id_1: "111",
                uni_id_2: "222",
                files: [{ filename: "https://example.com/images/mackerel.jpg" }]
            },
            {
                _id: "3",
                name: "Mackerel",
                slug: "mackerel",
                category: "Fish",
                discount: 10,
                available: "true",
                price: 300,
                mrp: 350,
                currVariantSize: "1kg",
                uni_id_1: "111",
                uni_id_2: "222",
                files: [{ filename: "https://example.com/images/mackerel.jpg" }]
            },
            {
                _id: "4",
                name: "Shrimp",
                slug: "shrimp",
                category: "Seafood",
                discount: 15,
                available: "false",
                price: 500,
                mrp: 600,
                currVariantSize: "500g",
                uni_id_1: "333",
                uni_id_2: "444",
                files: [{ filename: "https://example.com/images/shrimp.jpg" }]
            },
            {
                _id: "7",
                name: "Sardine",
                slug: "sardine",
                category: "Fish",
                discount: 5,
                available: "true",
                price: 200,
                mrp: 250,
                currVariantSize: "1kg",
                uni_id_1: "555",
                uni_id_2: "666",
                files: [{ filename: "https://example.com/images/sardine.jpg" }]
            },
            {
                _id: "8",
                name: "Octopus",
                slug: "octopus",
                category: "Seafood",
                discount: 20,
                available: "true",
                price: 1200,
                mrp: 1500,
                currVariantSize: "2kg",
                uni_id_1: "777",
                uni_id_2: "888",
                files: [{ filename: "https://example.com/images/octopus.jpg" }]
            }
        ],
        items2: [
            {
                _id: "5",
                name: "Crab",
                slug: "crab",
                category: "Seafood",
                discount: 20,
                available: "true",
                price: 800,
                mrp: 1000,
                currVariantSize: "1kg",
                uni_id_1: "555",
                uni_id_2: "666",
                files: [{ filename: "https://example.com/images/crab.jpg" }]
            },
            {
                _id: "6",
                name: "Lobster",
                slug: "lobster",
                category: "Seafood",
                discount: 25,
                available: "true",
                price: 1500,
                mrp: 2000,
                currVariantSize: "1kg",
                uni_id_1: "777",
                uni_id_2: "888",
                files: [{ filename: "https://example.com/images/lobster.jpg" }]
            },
            {
                _id: "9",
                name: "Clams",
                slug: "clams",
                category: "Seafood",
                discount: 10,
                available: "true",
                price: 400,
                mrp: 450,
                currVariantSize: "500g",
                uni_id_1: "999",
                uni_id_2: "1000",
                files: [{ filename: "https://example.com/images/clams.jpg" }]
            },
            {
                _id: "10",
                name: "Oysters",
                slug: "oysters",
                category: "Seafood",
                discount: 30,
                available: "true",
                price: 1000,
                mrp: 1300,
                currVariantSize: "1kg",
                uni_id_1: "1011",
                uni_id_2: "1012",
                files: [{ filename: "https://example.com/images/oysters.jpg" }]
            },
            {
                _id: "11",
                name: "Anchovies",
                slug: "anchovies",
                category: "Fish",
                discount: 40,
                available: "true",
                price: 100,
                mrp: 200,
                currVariantSize: "500g",
                uni_id_1: "1113",
                uni_id_2: "1114",
                files: [{ filename: "https://example.com/images/anchovies.jpg" }]
            },
            {
                _id: "11",
                name: "Anchovies",
                slug: "anchovies",
                category: "Fish",
                discount: 40,
                available: "true",
                price: 100,
                mrp: 200,
                currVariantSize: "500g",
                uni_id_1: "1113",
                uni_id_2: "1114",
                files: [{ filename: "https://example.com/images/anchovies.jpg" }]
            },
            {
                _id: "10",
                name: "Oysters",
                slug: "oysters",
                category: "Seafood",
                discount: 30,
                available: "true",
                price: 1000,
                mrp: 1300,
                currVariantSize: "1kg",
                uni_id_1: "1011",
                uni_id_2: "1012",
                files: [{ filename: "https://example.com/images/oysters.jpg" }]
            },
            {
                _id: "11",
                name: "Anchovies",
                slug: "anchovies",
                category: "Fish",
                discount: 40,
                available: "true",
                price: 100,
                mrp: 200,
                currVariantSize: "500g",
                uni_id_1: "1113",
                uni_id_2: "1114",
                files: [{ filename: "https://example.com/images/anchovies.jpg" }]
            },
            {
                _id: "11",
                name: "Anchovies",
                slug: "anchovies",
                category: "Fish",
                discount: 40,
                available: "true",
                price: 100,
                mrp: 200,
                currVariantSize: "500g",
                uni_id_1: "1113",
                uni_id_2: "1114",
                files: [{ filename: "https://example.com/images/anchovies.jpg" }]
            },
            {
                _id: "11",
                name: "Anchovies",
                slug: "anchovies",
                category: "Fish",
                discount: 40,
                available: "true",
                price: 100,
                mrp: 200,
                currVariantSize: "500g",
                uni_id_1: "1113",
                uni_id_2: "1114",
                files: [{ filename: "https://example.com/images/anchovies.jpg" }]
            },
    
        ]
    },
    sectionthree: {
        title: "Special Offers",
        subTitle: "Limited Time Deals",
        items: [
            {
                _id: "11",
                name: "Anchovies",
                slug: "anchovies",
                category: "Fish",
                discount: 40,
                available: "true",
                price: 100,
                mrp: 200,
                currVariantSize: "500g",
                uni_id_1: "1113",
                uni_id_2: "1114",
                files: [{ filename: "https://example.com/images/anchovies.jpg" }]
            },
            {
                _id: "11",
                name: "Anchovies",
                slug: "anchovies",
                category: "Fish",
                discount: 40,
                available: "true",
                price: 100,
                mrp: 200,
                currVariantSize: "500g",
                uni_id_1: "1113",
                uni_id_2: "1114",
                files: [{ filename: "https://example.com/images/anchovies.jpg" }]
            },
            {
                _id: "11",
                name: "Anchovies",
                slug: "anchovies",
                category: "Fish",
                discount: 40,
                available: "true",
                price: 100,
                mrp: 200,
                currVariantSize: "500g",
                uni_id_1: "1113",
                uni_id_2: "1114",
                files: [{ filename: "https://example.com/images/anchovies.jpg" }]
            },
            {
                _id: "11",
                name: "Anchovies",
                slug: "anchovies",
                category: "Fish",
                discount: 40,
                available: "true",
                price: 100,
                mrp: 200,
                currVariantSize: "500g",
                uni_id_1: "1113",
                uni_id_2: "1114",
                files: [{ filename: "https://example.com/images/anchovies.jpg" }]
            },
            {
                _id: "11",
                name: "Anchovies",
                slug: "anchovies",
                category: "Fish",
                discount: 40,
                available: "true",
                price: 100,
                mrp: 200,
                currVariantSize: "500g",
                uni_id_1: "1113",
                uni_id_2: "1114",
                files: [{ filename: "https://example.com/images/anchovies.jpg" }]
            },
            {
                _id: "11",
                name: "Anchovies",
                slug: "anchovies",
                category: "Fish",
                discount: 40,
                available: "true",
                price: 100,
                mrp: 200,
                currVariantSize: "500g",
                uni_id_1: "1113",
                uni_id_2: "1114",
                files: [{ filename: "https://example.com/images/anchovies.jpg" }]
            },
        ],
        items2: [
            {
                _id: "12",
                name: "Squid",
                slug: "squid",
                category: "Seafood",
                discount: 35,
                available: "true",
                price: 600,
                mrp: 900,
                currVariantSize: "1kg",
                uni_id_1: "1213",
                uni_id_2: "1214",
                files: [{ filename: "https://example.com/images/squid.jpg" }]
            },
            {
                _id: "12",
                name: "Squid",
                slug: "squid",
                category: "Seafood",
                discount: 35,
                available: "true",
                price: 600,
                mrp: 900,
                currVariantSize: "1kg",
                uni_id_1: "1213",
                uni_id_2: "1214",
                files: [{ filename: "https://example.com/images/squid.jpg" }]
            },
            {
                _id: "12",
                name: "Squid",
                slug: "squid",
                category: "Seafood",
                discount: 35,
                available: "true",
                price: 600,
                mrp: 900,
                currVariantSize: "1kg",
                uni_id_1: "1213",
                uni_id_2: "1214",
                files: [{ filename: "https://example.com/images/squid.jpg" }]
            },
            {
                _id: "12",
                name: "Squid",
                slug: "squid",
                category: "Seafood",
                discount: 35,
                available: "true",
                price: 600,
                mrp: 900,
                currVariantSize: "1kg",
                uni_id_1: "1213",
                uni_id_2: "1214",
                files: [{ filename: "https://example.com/images/squid.jpg" }]
            },
            {
                _id: "12",
                name: "Squid",
                slug: "squid",
                category: "Seafood",
                discount: 35,
                available: "true",
                price: 600,
                mrp: 900,
                currVariantSize: "1kg",
                uni_id_1: "1213",
                uni_id_2: "1214",
                files: [{ filename: "https://example.com/images/squid.jpg" }]
            },
            {
                _id: "12",
                name: "Squid",
                slug: "squid",
                category: "Seafood",
                discount: 35,
                available: "true",
                price: 600,
                mrp: 900,
                currVariantSize: "1kg",
                uni_id_1: "1213",
                uni_id_2: "1214",
                files: [{ filename: "https://example.com/images/squid.jpg" }]
            }
        ]
    },
    sectionfour: {
        title: "Best Sellers",
        subTitle: "Top Quality",
        items: [
            {
                _id: "13",
                name: "King Crab",
                slug: "king-crab",
                category: "Seafood",
                discount: 15,
                available: "true",
                price: 2000,
                mrp: 2500,
                currVariantSize: "2kg",
                uni_id_1: "1314",
                uni_id_2: "1315",
                files: [{ filename: "https://example.com/images/king-crab.jpg" }]
            },
            {
                _id: "13",
                name: "King Crab",
                slug: "king-crab",
                category: "Seafood",
                discount: 15,
                available: "true",
                price: 2000,
                mrp: 2500,
                currVariantSize: "2kg",
                uni_id_1: "1314",
                uni_id_2: "1315",
                files: [{ filename: "https://example.com/images/king-crab.jpg" }]
            },
            {
                _id: "13",
                name: "King Crab",
                slug: "king-crab",
                category: "Seafood",
                discount: 15,
                available: "true",
                price: 2000,
                mrp: 2500,
                currVariantSize: "2kg",
                uni_id_1: "1314",
                uni_id_2: "1315",
                files: [{ filename: "https://example.com/images/king-crab.jpg" }]
            },
            {
                _id: "13",
                name: "King Crab",
                slug: "king-crab",
                category: "Seafood",
                discount: 15,
                available: "true",
                price: 2000,
                mrp: 2500,
                currVariantSize: "2kg",
                uni_id_1: "1314",
                uni_id_2: "1315",
                files: [{ filename: "https://example.com/images/king-crab.jpg" }]
            }

        ]
    },
    sliderTwo: {
        for: "slider",
        items: [
            {
                uni_id: "999",
                file: { filename: "https://example.com/images/slider1.jpg" }
            },
            {
                uni_id: "1001",
                file: { filename: "https://example.com/images/slider2.jpg" }
            }
        ]
    },
    banner: {
        link: "https://example.com",
        file: { filename: "https://example.com/images/banner.jpg" }
    }
};


function HomePost() {
    const { sectionfour, sectionone, sectiontwo, sectionthree, sliderTwo, banner } = mockData;
    const [mounted, setMounted] = useState(false);

    const {
        setQuickVw, QuickVw,
        setUserLogged, setLoginModal, setCartTotal
    } = useContext(ContentControl);

    function LogOut() {
        setUserLogged({
            status: false
        });
        localStorage.removeItem('token');
    }
    
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) return <></>;
  
   if (mounted)
      return  (
        <div className={style.HomePost}>
            <div className='container'>
                <div className={style.SECTION1}>
                    <div className='p-3 pt-5'>
                        <h1 className='text-center font-bolder UserBlackMain'>{sectionone.title}</h1>
                        <h6 className='text-center font-bolder UserGrayMain'>{sectionone.subTitle}</h6>
                    </div>
                    <div className='text-center'>
                        <Swiper
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            spaceBetween={10}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                992: {
                                    slidesPerView: 4,
                                },
                                1205: {
                                    slidesPerView: 5,
                                },
                            }}
                        >
                            {sectionone.items.map((obj, key) => (
                                <SwiperSlide key={key}>
                                    <div className={style.UserCateSlidCard}>
                                        <div className={style.InnerDiv}>
                                            <Link href={`/c/${obj.slug}`} className="LinkTagNonDec">
                                                <div className={style.UserCateSlidImgDiv}>
                                                    <Image
    className={style.UserCateSlidImg}
    src={ProductImage}
    alt={obj.name}
    loading="lazy"
    style={{ width: '90%,' }}
/>
 
                                                    
                                                </div>
                                                <div>
                                                    <h5 style={{ fontSize: '16px', paddingLeft: '5px', paddingRight: '5px' }}
                                                        className='UserBlackMain font-bolder oneLineTxt'>{obj.name}</h5>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className="container p-4 pt-2">
                <Swiper
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    spaceBetween={20}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        992: {
                            slidesPerView: 2,
                        },
                        1205: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {sliderTwo.items.map((obj, key) => (
                        <SwiperSlide key={key}>
                            <div>
                                <Image className='ResponsiveImg rounded' style={{ cursor: 'pointer' }}
                                    src={MockImage}
                                    loading="lazy" alt="slider"
                                    onClick={() => window.open(banner.link, '_blank')}
                                />
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='UserMainBgGrey'>
                <div className='container'>
                    <div className='p-3 pt-5'>
                        <h1 className='text-center font-bolder UserBlackMain'>{sectiontwo.title}</h1>
                        <h6 className='text-center font-bolder UserGrayMain'>{sectiontwo.subTitle}</h6>
                    </div>
                    <div>
                        <Swiper
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            spaceBetween={20}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                992: {
                                    slidesPerView: 4,
                                },
                                1205: {
                                    slidesPerView: 5,
                                },
                            }}
                        >
                            {sectiontwo.items.map((obj, key) => (
                                <SwiperSlide key={key}>
                                    <div className={style.UserMainProCard}>
                                        <div className={style.UserMainProimgDiv + ' text-center'}>
                                            <div>
                                                <button className={style.offerGreen}>{obj.discount}%</button>
                                                {obj.available === "true" ? (
                                                    <button className={style.cartBtn} onClick={() => {
                                                        alert(`Adding ${obj.name} to cart`);
                                                        setCartTotal(amt => amt + parseInt(obj.price));
                                                    }}><i className="fa-solid fa-cart-plus"></i></button>
                                                ) : (
                                                    <button className={style.cartBtn}><i className="fa-solid fa-exclamation"></i></button>
                                                )}
                                            </div>
                                            <Link href={`/p/${obj.slug}/${obj._id}`} className="LinkTagNonDec">
                                                <Image
                                                src={ProductImage}
                                                    loading="lazy" alt={obj.name}
                                                />
                                            </Link>
                                            <button className={style.QuickViewDiv} onClick={() => {
                                                alert(`Quick view of ${obj.name}`);
                                                setQuickVw({
                                                    ...QuickVw,
                                                    active: true,
                                                    btn: true,
                                                    product: obj
                                                });
                                            }}>
                                                QUICK VIEW
                                            </button>
                                        </div>
                                        <Link href={`/p/${obj.slug}/${obj._id}`} className="LinkTagNonDec">
                                            <div className='pt-2'>
                                                <h6 className='UserGrayMain text-small oneLineTxt'><small>{obj.category}</small></h6>
                                                <h6 className='UserBlackMain oneLineTxt'>{obj.name}</h6>
                                                <h6><small className='UserGrayMain text-small'><del>₹ {obj.mrp}</del></small> <span className='UserBlackMain'>₹ {obj.price}</span></h6>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div>
                        <Swiper
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            spaceBetween={20}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                992: {
                                    slidesPerView: 4,
                                },
                                1205: {
                                    slidesPerView: 5,
                                },
                            }}
                        >
                            {sectiontwo.items2.map((obj, key) => (
                                <SwiperSlide key={key}>
                                    <div className={style.UserMainProCard}>
                                        <div className={style.UserMainProimgDiv + ' text-center'}>
                                            <div>
                                                <button className={style.offerGreen}>{obj.discount}%</button>
                                                {obj.available === "true" ? (
                                                    <button className={style.cartBtn} onClick={() => {
                                                        alert(`Adding ${obj.name} to cart`);
                                                        setCartTotal(amt => amt + parseInt(obj.price));
                                                    }}><i className="fa-solid fa-cart-plus"></i></button>
                                                ) : (
                                                    <button className={style.cartBtn}><i className="fa-solid fa-exclamation"></i></button>
                                                )}
                                            </div>
                                            <Link href={`/p/${obj.slug}/${obj._id}`} className="LinkTagNonDec">
                                                <Image
                                                    src={ProductImage}
                                                    loading="lazy" alt={obj.name}
                                                />
                                            </Link>
                                            <button className={style.QuickViewDiv} onClick={() => {
                                                alert(`Quick view of ${obj.name}`);
                                                setQuickVw({
                                                    ...QuickVw,
                                                    active: true,
                                                    btn: true,
                                                    product: obj
                                                });
                                            }}>
                                                QUICK VIEW
                                            </button>
                                        </div>
                                        <Link href={`/p/${obj.slug}/${obj._id}`} className="LinkTagNonDec">
                                            <div className='pt-2'>
                                                <h6 className='UserGrayMain text-small oneLineTxt'><small>{obj.category}</small></h6>
                                                <h6 className='UserBlackMain oneLineTxt'>{obj.name}</h6>
                                                <h6><small className='UserGrayMain text-small'><del>₹ {obj.mrp}</del></small> <span className='UserBlackMain'>₹ {obj.price}</span></h6>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            {banner?.file?.length !== 0 && (
                <div className="UserMainBgGrey">
                    <div className="container p-4">
                        <Image style={{ marginBottom: '20px', cursor: 'pointer' }}
                            className='ResponsiveImg rounded'
                            src={sliderImage}
                            onClick={() => window.open(banner.link, '_blank')}
                            loading="lazy" alt="s"
                        />
                    </div>
                </div>
            )}

            <div>
                <div className='container'>
                    <div className='p-3 pt-5'>
                        <h1 className='text-center font-bolder UserBlackMain'>{sectionthree.title}</h1>
                        <h6 className='text-center font-bolder UserGrayMain'>{sectionthree.subTitle}</h6>
                    </div>
                    <div>
                        <Swiper
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            spaceBetween={20}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                992: {
                                    slidesPerView: 4,
                                },
                                1205: {
                                    slidesPerView: 5,
                                },
                            }}
                        >
                            {sectionthree.items.map((obj, key) => (
                                <SwiperSlide key={key}>
                                    <div className={style.UserMainProCard}>
                                        <div className={style.UserMainProimgDiv + ' text-center'} style={{ background: '#f4f4f4' }}>
                                            <div>
                                                <button className={style.offerGreen}>{obj.discount}%</button>
                                                {obj.available === "true" ? (
                                                    <button className={style.cartBtn} onClick={() => {
                                                        alert(`Adding ${obj.name} to cart`);
                                                        setCartTotal(amt => amt + parseInt(obj.price));
                                                    }}><i className="fa-solid fa-cart-plus"></i></button>
                                                ) : (
                                                    <button className={style.cartBtn}><i className="fa-solid fa-exclamation"></i></button>
                                                )}
                                            </div>
                                            <Link href={`/p/${obj.slug}/${obj._id}`} className="LinkTagNonDec">
                                                <Image
                                                    src={ProductImage}
                                                    loading="lazy" alt={obj.name}
                                                />
                                            </Link>
                                            <button className={style.QuickViewDiv} onClick={() => {
                                            
                                                alert(`Quick view of ${obj.name}`);
                                                setQuickVw({
                                                    ...QuickVw,
                                                    active: true,
                                                    btn: true,
                                                    product: obj
                                                });
                                            }}>
                                                QUICK VIEW
                                            </button>
                                        </div>
                                        <Link href={`/p/${obj.slug}/${obj._id}`} className="LinkTagNonDec">
                                            <div className='pt-2'>
                                                <h6 className='UserGrayMain text-small oneLineTxt'><small>{obj.category}</small></h6>
                                                <h6 className='UserBlackMain oneLineTxt'>{obj.name}</h6>
                                                <h6><small className='UserGrayMain text-small'><del>₹ {obj.mrp}</del></small> <span className='UserBlackMain'>₹ {obj.price}</span></h6>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div>
                        <Swiper
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            spaceBetween={20}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                992: {
                                    slidesPerView: 4,
                                },
                                1205: {
                                    slidesPerView: 5,
                                },
                            }}
                        >
                            {sectionthree.items2.map((obj, key) => (
                                <SwiperSlide key={key}>
                                    <div className={style.UserMainProCard}>
                                        <div className={style.UserMainProimgDiv + ' text-center'} style={{ background: '#f4f4f4' }}>
                                            <div>
                                                <button className={style.offerGreen}>{obj.discount}%</button>
                                                {obj.available === "true" ? (
                                                    <button className={style.cartBtn} onClick={() => {
                                                        alert(`Adding ${obj.name} to cart`);
                                                        setCartTotal(amt => amt + parseInt(obj.price));
                                                    }}><i className="fa-solid fa-cart-plus"></i></button>
                                                ) : (
                                                    <button className={style.cartBtn}><i className="fa-solid fa-exclamation"></i></button>
                                                )}
                                            </div>
                                            <Link href={`/p/${obj.slug}/${obj._id}`} className="LinkTagNonDec">
                                                <Image
                                                src={ProductImage}
                                                    loading="lazy" alt={obj.name}
                                                />
                                            </Link>
                                            <button className={style.QuickViewDiv} onClick={() => {
                                                alert(`Quick view of ${obj.name}`);
                                                setQuickVw({
                                                    ...QuickVw,
                                                    active: true,
                                                    btn: true,
                                                    product: obj
                                                });
                                            }}>
                                                QUICK VIEW
                                            </button>
                                        </div>
                                        <Link href={`/p/${obj.slug}/${obj._id}`} className="LinkTagNonDec">
                                            <div className='pt-2'>
                                                <h6 className='UserGrayMain text-small oneLineTxt'><small>{obj.category}</small></h6>
                                                <h6 className='UserBlackMain oneLineTxt'>{obj.name}</h6>
                                                <h6><small className='UserGrayMain text-small'><del>₹ {obj.mrp}</del></small> <span className='UserBlackMain'>₹ {obj.price}</span></h6>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className='UserMainBgGrey' style={{ paddingBottom: '50px' }}>
                <div className='container'>
                    <div className='p-3 pt-5'>
                        <h1 className='text-center font-bolder UserBlackMain'>{sectionfour.title}</h1>
                        <h6 className='text-center font-bolder UserGrayMain'>{sectionfour.subTitle}</h6>
                    </div>
                    <div>
                        <Swiper
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            spaceBetween={20}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 2,
                                },
                                1205: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {sectionfour.items.map((obj, key) => (
                                <SwiperSlide key={key}>
                                    <div className={style.usrLastHmMainDiv}>
                                        <Link href={`/p/${obj.slug}/${obj._id}`} className="LinkTagNonDec">
                                            <div className={style.usrLastHmGrid}>
                                                <div>
                                                    <div className={style.UsrImgdivHomeLast}>
                                                        <Image
                                                        src={sliderImage}
                                                        
                                                    loading="lazy" alt={obj.name}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='p-2'>
                                                    <h6 className={style.category + ' UserGrayMain text-small oneLineTxt'}>
                                                        <small>{obj.category}</small>
                                                    </h6>
                                                    <h6 className={style.proName + ' UserBlackMain oneLineTxt'}>{obj.name}</h6>
                                                    <h6><small className='UserGrayMain text-small'><del>₹ {obj.mrp}</del></small> <span className='UserBlackMain'>₹ {obj.price}</span></h6>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePost;

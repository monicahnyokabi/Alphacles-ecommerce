import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'To empower small businesses to grow as we improve Africas  Interior design',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Connecting Africas Interior design dealears to make  the best deals',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      ' Our history has always been clear since We have always offered quality products  and satisfied our customers needs according to their taste and preferences . ',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`

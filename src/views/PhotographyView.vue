<script setup>
import Carousel from '@/components/Carousel.vue'

const slides = [
  {
    image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733760192/_MG_7401_rjchvu.jpg',
  },
  {
    image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733760192/_MG_7416_jrceg9.jpg',
  },
  {
    image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733760192/_MG_7569_d0tp2c.jpg',
  },
  {
    image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733760193/_MG_7697_wc97tw.jpg',
  },
  {
    image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733760192/_MG_7546_lqvtsu.jpg',
  },
  {
    image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733760193/_MG_7428_gemnof.jpg',
  },
  {
    image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733760192/_MG_7457_bqtdzz.jpg',
  },
  {
    image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733760193/_MG_7872_qaqlef.jpg',
  },
]
</script>

<template>
  <Carousel :slides="slides" />
</template>

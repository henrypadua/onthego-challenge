import { ReactNode, useRef, useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Box, Button } from '@mui/material'
import SwiperCore from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'

import { Research } from '@/interfaces/home'

import 'swiper/css/pagination'

import { AllCard } from './AllCard'
import { Cards } from './Cards'

import 'swiper/css'

import { STYLES } from '@/constants/styles'

interface CarouselProps {
  data: Research[]
}

export function Carousel({ data }: Readonly<CarouselProps>) {
  const swiperRef = useRef<SwiperRef>(null)
  const [slideState, setSlideState] = useState({
    isBeginning: true,
    isEnd: false,
  })

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  const handleSwiperUpdate = (swiper: SwiperCore) => {
    setSlideState({ isBeginning: swiper.isBeginning, isEnd: swiper.isEnd })
  }

  return (
    <Box
      position="relative"
      mt="28px"
      maxWidth={'480px'}
      mx="auto"
      sx={{
        '@media (min-width: 1440px)': { maxWidth: '1230px' },
        '@media (max-width: 1010px)': {
          maxWidth: '731px',
        },
      }}
    >
      <Swiper
        ref={swiperRef}
        onSlideChange={handleSwiperUpdate}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={'auto'}
        grid={{ rows: 1, fill: 'row' }}
        pagination={{ clickable: true }}
        className="swiper-dashboard"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Cards data={item} />
          </SwiperSlide>
        ))}

        <SwiperSlide>
          <AllCard />
        </SwiperSlide>
      </Swiper>
      <Box
        position="absolute"
        display="flex"
        right={0}
        top="-67px"
        justifyContent="space-between"
        gap="20px"
        sx={{
          [STYLES.breakpoints.md]: {
            top: '35%',
            right: '-66px',
            left: '-66px',
          },
        }}
      >
        <ArrowButton
          className="swiper-button-prev"
          onClick={goPrev}
          icon={<ArrowBackIosNewIcon />}
          disabled={slideState.isBeginning}
        />
        <ArrowButton
          className="swiper-button-next"
          onClick={goNext}
          icon={<ArrowForwardIosIcon />}
          disabled={slideState.isEnd}
        />
      </Box>
    </Box>
  )
}

interface ButtonProps {
  onClick: () => void
  icon: ReactNode
  disabled?: boolean
  className: string
}

function ArrowButton({
  onClick,
  className,
  icon,
  disabled = false,
}: Readonly<ButtonProps>) {
  return (
    <Button
      className={className}
      sx={{
        display: { xl: 'none', md: 'flex', xs: 'none' },
        minWidth: '0',
        width: '46px',
        height: '46px',
        color: '#000000',
        borderRadius: 999,

        [STYLES.breakpoints.md]: {
          color: '#FFFFFF',
          background: '#000000',
          borderRadius: '4px',

          '&:hover': {
            background: '#FFFFFF',
            color: '#000000',
          },
          '&:disabled': {
            opacity: 0.4,
            background: '#8A9099',
            color: '#242528',
          },
        },
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </Button>
  )
}

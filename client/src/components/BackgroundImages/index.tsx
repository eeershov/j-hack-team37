interface BackgroundImagesProps {
  HeaderImg?: string,
  LeftImg: string,
  RightImg: string
}

export default function BackgroundImages({ HeaderImg, LeftImg, RightImg }: BackgroundImagesProps) {
  return (
    <div className='background-images-block'>
      {
        HeaderImg
          ? <img src={HeaderImg} className='header-image' alt="header" />
          : null
      }
      <div className='header-boyngirl'>
        <img src={LeftImg} className="header-illustration boyMenu" alt="boyMenu" />
        <img src={RightImg} className="header-illustration girlMenu" alt="girlMenu" />
      </div>
    </div>
  )
}

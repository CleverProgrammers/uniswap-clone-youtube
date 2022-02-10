import { css } from '@emotion/react'
import { MoonLoader } from 'react-spinners'

const style = {
  wrapper: `text-white h-96 w-72 flex flex-col justify-center items-center`,
  title: `font-semibold text-xl mb-12`,
}

const cssOverride = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`

const TransactionLoader = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Transaction in progress...</div>
      <MoonLoader color={'#fff'} loading={true} css={cssOverride} size={50} />
    </div>
  )
}

export default TransactionLoader

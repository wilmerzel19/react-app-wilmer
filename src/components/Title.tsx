type Props = {
    titulo: string;
}

export const Title = (props: Props) => {
    const {titulo} = props;

  return (
    <>
    <div className='p-4 rounded-lg bg-violet-300'>
    <div className='px-10 text-[36px] font-bold text-center text-transparent uppercase bg-clip-text bg-gradient-to-b from-violet-700 to-cyan-600'>{titulo}</div>
    </div>
    </>
  )
}
import GenerateSection from '../components/generate-section'

export default function Home() {
  return (
    <main className='w-full'>
      <section
        id='hero-section'
        className='pt-12 pb-20'
        style={{ background: 'linear-gradient(to bottom, #034A7D, #02253E, transparent)' }}
      >
        <div className='w-full md:w-10/12 mx-auto'>
          <div className='w-full mx-auto text-center md:w-11/12 xl:w-9/12 md:text-center'>
            <h1
              className='text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]  mb-2'
              style={{ textWrap: 'balance' }}
            >
              <span className='block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#0694FA] to-[#C1E4FE] lg:inline'>
                Effortless .dockerfile
              </span>{' '}
              <span className='text-[#E0F2FE]'>generation and validation</span>
            </h1>

            {/* <p className='max-w-[750px] mx-auto text-lg text-muted-foreground sm:text-xl'>
              You can enter instructions to generate or enter a Dockerfile to validate it.
            </p> */}
          </div>
        </div>
      </section>
      <div className='mx-auto max-w-7xl'>
        <section id='generation-section'>
          <GenerateSection />
        </section>
      </div>
    </main>
  )
}

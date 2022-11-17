import './index.css'


function App() {
  return (
    <div className=" text-gray-700 max-h-full">
      <main className='flex justify-center items-center h-screen'>
        <div className='flex justify-center w-1/2 bg-white max-h-screen'>
          <form 
          className='flex-col p-4 bg-white 
          justify-center items-center border w-80 h-30 shadow-xl rounded-xl'
          >
            <h1
            className='text-center my-7 text-4xl'
            >PoupaPig</h1><img
            className='relative -top-20 left-3'
            src={require('./assets/images/save-money.png')} alt="coins arround pig" width={50}/>
            <label htmlFor='email'>
              <p>E-mail</p>
              <input
                className='p-2 border border-amber-500 rounded-xl w-full  mb-2' 
                id='email'
                type='email'
              />
            </label>
            <label htmlFor='password'>
              <p>Senha</p>
              <input 
                className='p-2 border border-amber-500 rounded-xl w-full' 
                id='password'
                type='password'
                />
            </label>
            <button
            className='mt-6 p-2 text-orange-800  bg-amber-300 border-pink-300 rounded-xl w-full' 
              type='button'
              >
              Login
            </button>
          </form>
        </div>
        <div 
        className="bg-[url('https://img.freepik.com/fotos-gratis/cofrinho-e-conceito-de-economia-de-moedas-de-dinheiro-na-renderizacao-3d-de-fundo-rosa_56104-1442.jpg?w=1060&t=st=1668716616~exp=1668717216~hmac=d5c362f3453da7181c04eb4e9e0a19228b9e25daf752771f9a1739a180d1f4dd')] h-screen bg-cover w-1/2">
        {/* <img 
        className='max-h-screen bg-contain'
        src={require('./assets/images/pigImage.jpg')} alt="coins arround pig"/> */}
        </div>
      </main>
    </div>
  );
}

export default App;

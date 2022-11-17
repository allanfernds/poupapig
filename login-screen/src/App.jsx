
function App() {
  return (
    <div className="App">
      <main>
        <div>
          <h1>PoupaPig</h1>
          <form>
            <label htmlFor='email'>
              <p>E-mail</p>
              <input 
                id='email'
                type='email'
              />
            </label>
            <label htmlFor='password'>
              <p>Senha</p>
              <input 
                id='password'
                type='password'
                />
            </label>
            <button
              type='button'
              >
              Login
            </button>
          </form>
        </div>
        <div>
        <img src={require('./assets/images/pigImage.jpg')} alt="coins arround pig" width={700}/>
        </div>
      </main>
    </div>
  );
}

export default App;

import { ClimaInfo } from './ClimaAtualStyles';

const ClimaAtual = ({clima}) => {

  if (!clima || !clima.name || !clima.weather || !clima.weather[0] || !clima.main) {
    return <div>Carregando...</div>;
  }

  return (
    <ClimaInfo>
        <h3>{clima.name}</h3>
        <img src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`} alt={clima.weather[0].description} />
        <p>{clima.main.temp}°C</p>
        <p>{clima.weather[0].description}</p>
    </ClimaInfo>
  )
}

export default ClimaAtual
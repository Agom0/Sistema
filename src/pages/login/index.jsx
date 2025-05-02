import { Link, useNavigate } from "react-router-dom"
import svg from "/public/fingerprint-animate.svg"

export default function LoginPage() {
    const navigate = useNavigate() // forma bem leve e boa de criar o botão
    return (

        <div className="w-full h-screen flex">
            <div className="w-[40%] h-full flex items-center justify-center">
                <Link to="/cadastro">Cadastrar</Link>
                <button
                    onClick={() => navigate("/cadastro")}
                > Cadastrar</button>
                <button
                    onClick={() => window.location.href = "/cadastro"} //Forma mais leve, comum e usada para adicionar botão de biblioteca usando o location
                >
                    Cadastrar
                </button>
            </div>
            <div className="w-[60%] h-full bg-[#dedada] flex items-center justify-center rounded-l-lg flex-col">
                <img width={600} src={svg} alt="imagem-animada" />
                <p className="text-white font-bold w-[300px] text-[20px] text-center">A melhor experiencia de login que você já teve na sua vida</p>
            </div>
        </div>)
}
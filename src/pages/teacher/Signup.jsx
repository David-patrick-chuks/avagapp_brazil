import { AiFillEyeInvisible } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { registerUser } from "../../services/auth";
import { errorNotify, goodNotify } from "../../../helper/ToastLogin";
export default function Signup() {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "teacher"
  });
  const [viewPassword, setViewPassword] = useState(false);
  const siteKey = "6Lf4inwqAAAAAD64ITgkHFsgBPk_qvE52l2_6ltd";

  const navigate = useNavigate();

  const togglePassword = () => {
    setViewPassword((prev) => !prev);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async () => {
    // if (!captchaValue) {
    //   return alert("Por favor, complete o reCAPTCHA");
    // }
    
   
    try {
      const response = await registerUser(formData);
      goodNotify(response?.message || " Registration successful ")
      navigate("/teacher/dashboard"); // Redirect after success
    } catch (error) {
      console.error("Erro ao registrar:", error);
      errorNotify(error?.message || "Unknown error");
    }
  };

  return (
    <div className="flex overflow-hidden bg-white h-screen w-full">
      <div className="h-full w-[25.5%] lg:block hidden relative">
        <img src="/teacher/avagwhite.png" className="absolute w-28 left-7 bottom-0" />
        <img src="/teacher/signup.png" className="h-screen flex" />
      </div>
      <div className="flex w-full lg:w-[74.5%] 2xl:gap-[30px] lg:gap-[3px] flex-col justify-center items-center h-full">
        <div className="flex mb-5 lg:mb-0 w-full items-center justify-center">
          <h1 className="text-main-dark text-3xl font-semibold 2xl:text-5xl">Bem-vindo</h1>
          <img src="/teacher/hand.png" className="lg:size-20 size-20" />
        </div>
        <div className="2xl:p-[30px] w-[85%] lg:w-[50%] p-4 lg:p-5 flex flex-col gap-[18px] rounded-xl 2xl:rounded-3xl bg-main-light">
          <label htmlFor="fullName" className="font-medium 2xl:text-lg text-main-dark">
            Nome de Usuário
            <input
              type="text"
              autoComplete="off"
              placeholder="Nome de Usuário"
              className="text-main-dark/70 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-main-dark/70 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="email" className="font-medium text-lg text-main-dark">
            Email
            <input
              type="email"
              autoComplete="off"
              placeholder="Email"
              className="text-main-dark/70 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-main-dark/70 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="password" className="relative font-medium text-lg text-main-dark">
            Senha
            <input
              type={viewPassword ? "text" : "password"}
              autoComplete="off"
              placeholder="Senha"
              className="text-main-dark/70 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-main-dark/70 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
            <p className="top-[60%] right-3 absolute" onClick={togglePassword}>
              {!viewPassword ? <BsEyeFill size={20} /> : <AiFillEyeInvisible size={20} />}
            </p>
          </label>

          <ReCAPTCHA
            className="g-recaptcha -mb-7"
            data-size="compact"
            hl="pt-BR"
            sitekey={siteKey}
            onChange={handleCaptchaChange}
          />
          <p
            onClick={handleSubmit}
            className="bg-main-dark w-[100%] cursor-pointer rounded-xl text-center text-white font-bold text-xl mt-2 2xl:text-2xl py-3"
          >
            Cadastre-se
          </p>
        </div>
        <p className="w-full cursor-pointer mt-1 text-center">
          Já tem uma conta? <Link to={"/teacher/signup"} className="text-main-dark">Entre</Link>
        </p>
      </div>
    </div>
  );
}

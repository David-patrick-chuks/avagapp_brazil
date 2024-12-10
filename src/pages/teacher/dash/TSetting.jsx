import { Checkbox, Radio, Switch, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

function TSetting() {

  const location = useLocation()
  const create = location.pathname.includes("admin")

  const [activeTab, setActiveTab] = useState("notifications");
  const [rate, setRate] = useState("")
  const [recom, setRecom] = useState("")
  const [form, setForm] = useState(false)
  const [desp, setDesp] = useState("")
  const [title, setTitle] = useState("")

  const [sendNotifyModal, setSendNotifyModal] = useState(false)

  const [selectedRecipient, setSelectedRecipient] = useState(""); // Track selected checkbox

  const handleSend = () => {
    if (!desp || !title) {
      return alert("Todos os campos são obrigatórios");
    }
    setSendNotifyModal(true);
  };
  
  const handlePublish = () => {
    if (!selectedRecipient) {
      return alert("Por favor, selecione um usuário para publicar");
    }
    setSendNotifyModal(false);
    alert(`Notificação enviada para ${selectedRecipient}`);
    resetValues();
  };
  

  const resetValues = () => {
    setDesp(""); // Reset description
    setTitle(""); // Reset title
    setSelectedRecipient(""); // Reset selected recipient
    setSendNotifyModal(false); // Close the modal
  };


  return (
    <div className='flex overflow-x-hidden bg-main-light cursor-pointer flex-col py-3  px-2 gap-4'>

      <div className="flex border-b">
        <button
          onClick={() => setActiveTab("notifications")}
          className={`w-1/2 py-2 text-center text-lg font-semibold ${activeTab === "notifications"
            ? "border-b-2 border-blue-500 text-blue-500"
            : "text-gray-600"
            }`}
        >
          Notificações
        </button>
        <button
          onClick={() => setActiveTab("settings")}
          className={`w-1/2 py-2 text-center text-lg font-semibold ${activeTab === "settings"
            ? "border-b-2 border-blue-500 text-blue-500"
            : "text-gray-600"
            }`}
        >
          Configurações
        </button>

      </div>

      <div className="mt-4">
        {activeTab === "settings" ? (
          <>

            <Link to={"/student/dashboard/student-profile"} className={`flex  flex-col p-2 ${create ? "hidden" : "flex"}`} >
              <header className='flex font-semibold text-lg'>Configurações de Perfil do Usuário</header>
              <ul>
                <li>   - Perfil da Criança          </li>
                <li>   - Seleção de Avatar          </li>
              </ul>
            </Link>


            <div className='flex  flex-col p-2 '>
              <header className='flex font-semibold text-lg'>Notificações e Alertas      </header>
              <ul>
                <li className='flex justify-between'>  - Alertas de Atividade          <Switch color='blue' defaultChecked /></li>
                <li className='flex justify-between'>   - Configurações de Lembrete         <Switch color='blue' /></li>
              </ul>
            </div>
            <div className='flex  flex-col p-2 '>
              <header className='flex font-semibold text-lg'>Controles de Som e Músicas
              </header>
              <ul>
                <li className='flex justify-between'>  - Narração por Voz
                  <Switch color='blue' /></li>

              </ul>
            </div>
            {/* <div className={`flex flex-col p-2 ${create ? "hidden" : "flex"}`}>
              <header className='flex font-semibold text-lg'>Suporte e Feedback


              </header>
              <ul className='flex flex-col gap-3'>
                <a href="mailto:abolajiayobami2000@gmail.com"> <li className='flex cursor-pointer items-center gap-1 '>  - Contatar Suporte
                  <MdEmail className=' text-main-dark/50 text-lg' /></li>
                </a>
                <li onClick={() => setForm(prev => !prev)} className='font-semibold mt2 cursor-pointer rounded-sm bg-main-dark w-fit text-white py-1 px-2'>
                  - Formulário de Feedback
                </li>
                <div className={`${form ? "bg-opacity-100 transition-opacity duration-500" : "hidden"} w-full p-4 lg:p-5 flex flex-col  gap-[18px] rounded-xl 2xl:rounded-3xl  bg-main-light`}>

                  <label htmlFor="name" className='font-medium 2xl:text-lg text-main-dark'>
                    Como você avaliaria sua experiência geral de aprendizado em nosso site?
                  </label>

                  <div className='grid grid-cols-2'>
                    {["Excelente", "Bom", "Razoável", "Pobre"].map((rat, id) => (
                      <div className='flex justify-start items-center' onClick={() => setRate(rat)} key={id}>    <Checkbox
                        checked={rate === rat}
                        color='blue'
                        className=" size-5 lg:size-8 rounded-full  border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                      /> {rat}</div>
                    ))}
                  </div>

                  <label htmlFor="name" className='font-medium 2xl:text-lg text-main-dark'>
                    Qual recurso ou lição você achou mais útil para o seu aprendizado?
                    <input type="text" autoComplete='off' placeholder='(Por favor, descreva quaisquer desafios que você enfrentou)' className='text-main-dark/70 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-main-dark/70 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />

                  </label>
                  <label htmlFor="name" className='font-medium 2xl:text-lg text-main-dark'>
                    Qual a probabilidade de você recomendar este site para outros estudantes?
                  </label>
                  <div className='grid grid-cols-2'>

                    {["Muito Provável", "Provável", "Neutro", "Improvável"].map((rat, id) => (
                      <div className='flex justify-start items-center' onClick={() => setRecom(rat)} key={id}>    <Checkbox
                        checked={recom === rat}
                        color='blue'
                        className=" size-5 lg:size-8 rounded-full  border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                      /> {rat}</div>
                    ))}
                  </div>
                  <label htmlFor="name" className='font-medium text-base text-black'>Que melhorias você gostaria de ver em nossas lições ou recursos?

                    <textarea
                      style={{ resize: "none" }} rows={5} type="text" autoComplete='off' placeholder='(Por favor, compartilhe sua sugestão)' className='text-[#545454]  2xl:px-[18px] mt-2 lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-[#545454] border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4 ' id='name' />
                  </label>
                  <p className='font-bold mb-2 rounded-lg text-center p-2 text-base lg:text-[22px] bg-main-dark text-white' onClick={() => setForm(prev => !prev)} >Enviar Feedback</p>

                </div>

              </ul>
            </div> */}

            <Link to={"/student/dashboard"} className='p-2 bg-white text-main-dark rounded-full lg:hidden absolute bottom-4 left-4 size-12 shadow-md flex justify-center items-center'>

              <FaHome className='size-full' />
            </Link></>
        ) : (
          <>
            <div className={`p-4 flex flex-col gap-5 divide-y rounded-md  ${create ? "hidden" : "flex"} `}>
              {/* <p className="mt-2">Nenhuma notificação disponível.</p> */}
              <div className='flex justify-center items-center   divide-x-2 divide-black gap-3 '>
                <img className='size-14' src="/pyhon.png" alt="" />
                <div className='px-2'>
                  <p>🎉 Notícia Empolgante: Curso Master Python Agora ao Vivo! Aprenda do básico ao avançado com projetos reais e orientação de especialistas. Comece a aprender agora!</p>
                </div>
              </div>
              <div className='flex justify-center items-center   divide-x-2 divide-black gap-3 '>
                <img className='size-14' src="/pyhon.png" alt="" />
                <div className='px-2'>
                  <p>🔔 Nova Atualização: Curso de Programação Python Lançado! 🚀 Domine o Python com projetos práticos, conceitos avançados e acesso vitalício. Inscreva-se hoje!</p>
                </div>
              </div>
              <div className='flex justify-center items-center   divide-x-2 divide-black gap-3 '>
                <img className='size-14' src="/pyhon.png" alt="" />
                <div className='px-2'>
                  <p>💥 Acabou de Ser Lançado: Curso de Domínio de Python! De conceitos essenciais a tópicos avançados, adquira as habilidades necessárias para se destacar em Python. Não perca!</p>
                </div>
              </div>
              <div className='flex justify-center items-center   divide-x-2 divide-black gap-3 '>
                <img className='size-14' src="/pyhon.png" alt="" />
                <div className='px-2'>
                  <p>📢 Alerta de Novo Curso: Master Python Programming! Seja você iniciante ou experiente, este curso tem tudo o que você precisa para avançar suas habilidades em Python. Inscreva-se agora!</p>
                </div>
              </div>

            </div>
            
            <div className={`p-4 flex flex-col gap-5 divide-y rounded-md  ${create ? "flex" : "hidden"} `}>
              <label htmlFor="name" className='font-medium text-base text-black'>Título da Notificação
                <input
                  style={{ resize: "none" }} onChange={(e) => setTitle(e.target.value)} value={title} rows={6} type="text" autoComplete='off' placeholder='Título da Notificação' className='text-[#545454]  2xl:px-[18px] mt-2 lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-[#545454] border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
              </label>
              <label htmlFor="name" className='font-medium text-base text-black'>Notifications
                <textarea
                  style={{ resize: "none" }} value={desp} onChange={(e) => setDesp(e.target.value)} rows={6} type="text" autoComplete='off' placeholder='Detalhes da notificação' className='text-[#545454]  2xl:px-[18px] mt-2 lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-[#545454] border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
              </label>

              <p onClick={handleSend} className='capitalize w-full p-3 rounded-lg bg-main-dark text-white text-center mt-5'>
                Publicar notificações
              </p>
              {sendNotifyModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-lg font-bold mb-4">Selecionar Destinatário</h2>
                    <div className='flex flex-col gap-3'>

                      <Radio
                        color="blue"
                        type="radio"
                        name="recipient"
                        value="Professor"
                        onChange={(e) => setSelectedRecipient(e.target.value)}
                        label={
                          <div>
                            <Typography color="blue-gray" className="font-semibold">
                              Professor
                            </Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                              A notificação será enviada apenas para professores
                            </Typography>
                          </div>
                        }
                        containerProps={{
                          className: "-mt-5",
                        }}
                      />
                      <Radio
                        color="blue"
                        type="radio"
                        name="recipient"
                        value="Estudante"
                        onChange={(e) => setSelectedRecipient(e.target.value)}
                        label={
                          <div>
                            <Typography color="blue-gray" className="font-semibold">
                              Estudante
                            </Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                              A notificação será enviada apenas para estudantes
                            </Typography>
                          </div>
                        }
                        containerProps={{
                          className: "-mt-5",
                        }}
                      />
                      <Radio
                        color="blue"
                        type="radio"
                        name="recipient"
                        value="Ambos Professor e Estudante"
                        onChange={(e) => setSelectedRecipient(e.target.value)}
                        label={
                          <div>
                            <Typography color="blue-gray" className="font-semibold">
                              Ambos
                            </Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                              A notificação será enviada para professores e estudantes
                            </Typography>
                          </div>
                        }
                        containerProps={{
                          className: "-mt-5",
                        }}
                      />
                    </div>

                    <div className="flex justify-end mt-3 gap-3">
                      <button
                        onClick={() => setSendNotifyModal(false)}
                        className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
                      >
                        Cancelar
                      </button>
                      <button
                        onClick={handlePublish}
                        className="px-4 py-2 rounded-md bg-main-dark text-white hover:bg-opacity-90"
                      >
                        Publicar
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </>

        )}
      </div>

    </div>
  )
}

export default TSetting
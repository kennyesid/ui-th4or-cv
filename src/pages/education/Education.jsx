import React from 'react'

const Education = ({ language }) => {
    return (
        <>
            <h2 className="heading">Job</h2>
            <div className="timeline-items">
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2021/10 - Hoy</div>
                    <div className="timeline-content">
                        <div>
                            <h3 className='timeline-content-right'>Banco Ganadero</h3>
                            <h1 className='timeline-content-right timeline-content-cargo'>Desarrollador de Software</h1>
                        </div>
                        <p>Lo más importante que realice es desarrollar un servicio rest con spring boot el cual interactúa con el core del banco, este servicio fue creado en la interacción con el<span className='span-relieve'> Banco Central de Bolivia </span> el cual realiza abonos masivos de múltiples clientes, donde se controló el estado de la cuenta, actualización de saldos, horario en el que se puede realizar este tipo de transacciones, seguridad con jwt, Sha256 y mas…</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2019/03 - 2021/10</div>
                    <div className="timeline-content">
                        <h3>Banco Mercantil Santa Cruz </h3>
                        <h1 className='timeline-content-cargo'>Analista de Sistemas</h1>
                        <p>Estuve a cargo de los <span className='span-relieve'>ATM’s</span> del Banco el cual en su momento se migro el core bancario para lo cual se contrató una empresa externa el cual realizo un servicio rest y yo era el encargado de controlar todo el flujo del ATM como ser consultas, extracto, retiro, depósito y demás.</p>
                        <p>Obviamente todas respuestas que el ATM visualiza al cliente se las controlo con el documento ISO 8586.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2018/04 - 2018/10</div>
                    <div className="timeline-content">
                        <h3 className='timeline-content-right'>Banco Nacional de Bolivia</h3>
                        <h1 className='timeline-content-right timeline-content-cargo'>Analista Soluciones Digitales</h1>
                        <p>La principal función que realice es realizar un dashboard donde mostraba todas las transacciones realizadas en plataforma, ATM, BNB Movil y demás canales. </p>
                        <p>Este dashboard mostraba en torta y barra de porcentajes las transacciones realizadas por día, semana, mes y año.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2015/03 - 2018/04</div>
                    <div className="timeline-content">
                        <h3>Banco de Crédito de Bolivia</h3>
                        <h1 className='timeline-content-cargo'>Analista tecnico III</h1>
                        <p>El BCP fue mi maestra y dio pie a aprender todas las tecnologías que hoy en día conozco y también tuve un muy buen mentor que me enseñó a manejar correctamente las variables, acá realice muchas cosillas pero lo más sobresaliente fue de ser parte del backend de la aplicación Soli BCP el cual al principio se realizó entre 5 integrantes y se utilizó la modalidad de la Orquestación para Backend, al final mi persona fue el encargado principal de manejar todo el servicio rest que realiza las transacciones bancarias, pagos a servicios y demás.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education
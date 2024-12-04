const dataInformation = {
  spanish: {
    language: "Español",
    click: "tocame",
    navbar: {
      home: "Inicio",
      job: "Trabajo",
      service: "Servicio",
      contactMe: "Contactame",
      reference: "Referencia",
    },
    initHome: {
      title: "Hola, soy",
      contactMe: "Contactame:",
      contactMeDescription:
        "Si desea recibir mi CV junto con las referencias correspondientes, por favor, no dude en contactarme a través de los siguientes medios.",
      descriptionTitle: "Sobre mi:",
      descriptionBodyOne:
        "Desarrollador con más de 8 años de experiencia en la industria bancaria, especializado en la creación de aplicaciones web y microservicios utilizando tecnologías como .NET Core, Node.js, Angular, React, SQL Server etc... He liderado proyectos clave como la implementación de servicios REST para transacciones bancarias y la migración de core bancarios, optimizando procesos y mejorando la eficiencia operativa. Además, tengo experiencia en la integración con sistemas externos, incluyendo la automatización de procesos para resolver incidencias en la facturación electrónica. Mi enfoque está en entregar soluciones robustas, mejorar la calidad de los sistemas y trabajar en equipo para lograr resultados efectivos.",
      // "Desarrollador FullStack con 8 años de experiencia en la creación de soluciones escalables y eficientes tanto en backend como en frontend. Especializado en .Net Core, Node.js, Nest.js, React, JavaScript y TypeScript, con un historial probado en el desarrollo de aplicaciones concurrentes y de alto rendimiento. Me destaco por mi capacidad para adaptarme rápidamente a nuevos equipos de trabajo, mi enfoque en la puntualidad y la organización, y mi competitividad que impulsa la excelencia en cada proyecto.",
      descriptionBodyTwo:
        "En mis 8 años de trabajo he realizado múltiples desarrollos como servicios rest, soap, páginas web, servicios Windows, optimización de consultas en base de datos etc...",
      descriptionBodyThree:
        "Me integro rápido al equipo de trabajo y me gusta implementar nuevas soluciones con nuevas tecnologías.",
      descriptionBodyFor:
        "Pienso que lo más sobresaliente de mi es que soy muy positivo.",
    },
    header: {
      title: "titulo en español",
    },
    job: {
      jobGanadero: {
        jobTitle: "Desarrollador de Software",
        one: "Creé una página web utilizando React, .Net Core 8 y Oracle para generar scripts que resolvieran 20,000 facturas pendientes de emisión debido a diversas razones.",
        two: "Me enorgullezco de haber gestionado de manera efectiva el manejo de excepciones en todos mis servicios, lo que me permitió identificar y resolver rápidamente los problemas que surgían en Producción. Aunque los servicios que desarrollé fallaban muy poco, siempre me aseguré de registrar y rastrear correctamente cada request y response enviados a otros servicios.",
        three:
          "A inicios de 2023, me integré a un nuevo equipo para implementar tecnologías emergentes y desarrollar un microservicio en Spring Boot. Aunque no era mi especialidad, tomé cursos en Platzi y OpenWebinars, lo que me permitió crear un servicio eficiente y escalable.",
        for: "Diseñé e implementé un servicio para enviar facturas a los clientes por correo electrónico utilizando .NET Core 5, HTML y CSS. Originalmente, la generación de facturas tardaba 8 segundos, pero optimicé el proceso, reduciendo el tiempo a aproximadamente 2 segundos.",
      },
      jobBMSC: {
        jobTitle: "Analista de Sistemas - Renovar",
        one: "Participé en la migración del core bancario y fui el encargado principal de administrar los cajeros automáticos (ATM). Me aseguré de que los ATM funcionaran sin fallos, supervisando que todas las consultas, extractos y transacciones se procesaran correctamente.",
        two: "El ATM tiene más de 150 códigos de error que deben ser gestionados adecuadamente para proporcionar mensajes claros al usuario. Inicialmente, realicé los casos de prueba manualmente uno por uno. Posteriormente, desarrollé un proyecto en MVC y Sql DataBases para automatizar estos casos de prueba, generando un informe en Excel que detallaba qué pruebas fueron exitosas y cuáles fallaron, junto con sus mensajes de respuesta.",
        three:
          "Desarrollé un proyecto en Angular para visualizar todas las transacciones del cajero automático y su estado, lo que me permitió monitorear y analizar el comportamiento del sistema durante las pruebas. Esta herramienta facilitó la identificación de patrones y la resolución de problemas, mejorando la eficiencia en el análisis de transacciones.",
        for: "",
      },
      jobBnb: {
        jobTitle: "Analista de Sistemas",
        one: "Desarrollé y mantuve la página web BNBEGIN, que muestra todas las transacciones realizadas en el banco, filtradas por cajeros automáticos (ATM), plataforma, y aplicación móvil. Estas transacciones se visualizan en un dashboard interactivo, implementado con FusionCharts, Angular, y Service SOAP, junto con consultas a la base de datos para el manejo de la información.",
        two: "Desarrollé un servicio de Windows para transferir información desde múltiples archivos TXT a la base de datos. Dado que estos archivos no seguían un esquema uniforme, implementé una solución adaptable para procesar más de 10 formatos diferentes. El servicio, parametrizado para ejecutarse diariamente a las 3 a.m., fue desarrollado utilizando C#, Entity Framework y una arquitectura en capas.",
        three: "",
        for: "",
      },
      jobBCP: {
        jobTitle: "Analista Tecnico III",
        one: "Uno de mis logros más destacados fue la implementación del API para la app Yape (disponible en Play Store), utilizando una arquitectura de orquestador que mejora el control de excepciones y permite un escalamiento adecuado según el inconveniente. Este servicio, desarrollado en C# con arquitectura en capas y SQL Server, gestiona diversas operaciones como transacciones bancarias, consultas, pagos de servicios y depósitos a plazos fijos.",
        two: "Diseñé e implementé una página web administrativa para la app BCP Bolivia, que controlaba parámetros como el monto máximo por transacción, bancos activos, estado de cuentas, entre otros. El desarrollo se realizó utilizando C#, MVC, Razor, Entity Framework, expresiones lambda y SQL Server.",
        three:
          "Desarrollé una página administrativa para la aplicación Tus Beneficios, encargada de registrar los tickets asignados a los clientes. Esta página permite la carga de hasta 20,000 registros desde un archivo Excel. La aplicación fue desarrollada utilizando MVC4, Entity Framework y SQL Server.",
        for: "Optimicé sistemas complejos y bases de datos para reducir significativamente el tiempo de ejecución mediante el análisis y la mejora del rendimiento de consultas que anteriormente eran lentas. Esta optimización resultó en una mayor eficiencia y tiempos de respuesta más rápidos en la recuperación de datos.",
      },
    },
  },
  english: {
    language: "English",
    click: "touch me",
    navbar: {
      home: "Home",
      job: "Job",
      service: "Service",
      contactMe: "Contact",
      reference: "Reference",
    },
    initHome: {
      title: "Hi, I'm",
      contactMe: "Contact with me:",
      contactMeDescription:
        "If you would like to receive my CV along with the relevant references, please do not hesitate to contact me through the following means.",
      descriptionTitle: "About me:",
      descriptionBodyOne:
        "Software developer with over 8 years of experience in the banking industry, specializing in the development of web applications and microservices using technologies such as .NET Core, Node.js, Angular, React, SQL Server etc... I have led key projects, including the implementation of RESTful services for banking transactions and core banking migrations, optimizing processes and improving operational efficiency. I also have experience integrating with external systems, including automating processes to resolve issues in electronic invoicing. My focus is on delivering robust solutions, improving system quality, and working collaboratively to achieve effective results.",
      // "Full Stack Developer with 8 years of experience in creating scalable and efficient solutions for both backend and frontend. Specialized in .Net Core, Node.js, Nest.js, React, JavaScript, and TypeScript, with a proven track record in developing concurrent and high-performance applications. I excel in quickly adapting to new teams, maintaining a strong focus on punctuality and organization, and my competitive nature drives excellence in every project.",
      descriptionBodyTwo:
        "En mis 8 años de trabajo he realizado múltiples desarrollos como servicios rest, soap, páginas web, servicios Windows, optimización de consultas en base de datos etc...",
      descriptionBodyThree:
        "Me integro rápido al equipo de trabajo y me gusta implementar nuevas soluciones con nuevas tecnologías.",
      descriptionBodyFor:
        "Pienso que lo más sobresaliente de mi es que soy muy positivo.",
    },
    header: {
      title: "title en english",
    },
    job: {
      jobGanadero: {
        jobTitle: "Software Developer",
        one: "I created a website using React, .Net Core 8, and Oracle to generate scripts that resolved 20,000 pending invoices due to various reasons.",
        two: "I take pride in having effectively managed exception handling across all my services, which allowed me to quickly identify and resolve issues that arose in Production. Although the services I developed failed very rarely, I always ensured that each request and response sent to other services was properly logged and tracked.",
        three:
          "At the beginning of 2023, I joined a new team to implement emerging technologies and develop a microservice in Spring Boot. Although it was not my specialty, I took courses on Platzi and OpenWebinars, which enabled me to create an efficient and scalable service.",
        for: "Design and Build a service to send invoices to customers via email using .NET Core 5, HTML, and CSS. Initially, invoice generation took 8 seconds, but I optimized the process, reducing the time to approximately 2 seconds.",
      },
      jobBMSC: {
        jobTitle: "Sistems Analyst - Renovar",
        one: "I participated in the migration of the core banking system and was the primary responsible for managing the ATMs. I ensured that the ATMs operated smoothly by overseeing that all inquiries, statements, and transactions were processed correctly.",
        two: "The ATM has over 150 error codes that must be properly managed to provide clear messages to the user. Initially, I manually executed the test cases one by one. Later, I developed an MVC and Sql DataBases project to automate these test cases, generating an Excel report detailing which tests were successful and which failed, along with their response messages.",
        three:
          "Developed an Angular project to display all ATM transactions and their statuses, which allowed me to monitor and analyze system behavior during testing. This tool facilitated pattern identification and problem resolution, enhancing efficiency in transaction analysis.",
        for: "",
      },
      jobBnb: {
        jobTitle: "System Analyst",
        one: "•	Developed and maintained the BNBEGIN website, which displays all transactions performed in the bank, filtered by ATMs, platform, and mobile application. These transactions are visualized on an interactive dashboard, implemented using FusionCharts, Angular, and SOAP services, along with database queries for data management.",
        two: "•	Developed a Windows service to transfer information from multiple TXT files to a database. Since these files lacked a consistent schema, I implemented a flexible solution to handle more than 10 different formats. The service, scheduled to run daily at 3 a.m. (parametrized), was developed using C#, Entity Framework, and a layered architecture.",
        three: "",
        for: "",
      },
      jobBCP: {
        jobTitle: "Technical Analyst III",
        one: "One of my most significant achievements was implementing the API for the Yape app (available on Play Store), using an orchestrator architecture that improves exception handling and allows for appropriate escalation depending on the issue. This service, developed in C# with layered architecture and SQL Server, manages various operations such as banking transactions, inquiries, bill payments, and fixed-term deposits.",
        two: "I designed and implemented an administrative web page for the BCP Bolivia app, which managed parameters such as maximum transaction amounts, active banks, account status, and more. The development was done using C#, MVC, Razor, Entity Framework, lambda expressions, and SQL Server.",
        three:
          "Developed an administrative page for the Tus Beneficios application, responsible for recording tickets assigned to clients. This page supports loading up to 20,000 records from an Excel file. The application was built using MVC4, Entity Framework, and SQL Server.",
        for: "Optimized complex systems and databases to significantly reduce execution time by analyzing and enhancing the performance of previously slow queries. This optimization led to greater efficiency and faster response times in data retrieval.",
      },
    },
  },
};

export default dataInformation;

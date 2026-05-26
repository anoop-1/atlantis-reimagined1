import I18nErpPage, { I18nErpUiStrings } from "@/components/I18nErpPage";

const ui: I18nErpUiStrings = {
  heroBadge: "Solución ERP para Ensayos No Destructivos",
  heroTitle: "Solución integral Atlantis NDT ERP",
  heroSubtitle: "Plataforma completa para empresas de inspección END",
  heroIntro:
    "Sistema ERP integral diseñado específicamente para empresas de Ensayos No Destructivos en Latinoamérica. Gestión de proyectos, seguimiento de certificaciones de técnicos, calibración de equipos, facturación, inventario y control documental ISO 9001 en una sola plataforma.",
  ctaPrimary: "Solicitar demostración",
  ctaSecondary: "English version",
  statCompanies: "Empresas END a nivel mundial",
  statRating: "Calificación promedio de clientes",
  statAdminReduction: "Reducción en tiempo administrativo",
  statModules: "Módulos centrales",
  marketContextLabel: "Solución ERP especializada",
  painPointsTitle: "Por qué el sector END necesita un ERP especializado",
  painPointsSubtitle: "Tres desafíos que los ERPs generales no pueden resolver",
  problemLabel: "El problema",
  solutionLabel: "La solución",
  modulesTitle: "Seis módulos centrales de la solución integral Atlantis",
  modulesSubtitle:
    "Cada módulo está diseñado específicamente para la industria de inspección — no es software genérico de negocios renombrado",
  roiTitle: "ROI de la solución integral Atlantis",
  faqTitle: "Preguntas frecuentes — Solución integral Atlantis",
  alsoServingTitle: "También servimos",
  finalCtaTitle: "¿Listo para transformar las operaciones de su empresa de inspección END?",
  finalCtaBody:
    "Únase a más de 127 empresas de inspección a nivel mundial que utilizan la solución Atlantis para gestionar su operación de inspección. Solicite una demostración personalizada.",
  finalCtaPrimary: "Solicitar demostración",
  finalCtaSecondary: "View English version",
  switchLangLabel: "English version",
};

export default function EsNdtErpSolution() {
  return (
    <I18nErpPage
      lang="es"
      dir="ltr"
      city="Latinoamérica"
      countryCode="MX"
      countryName="Latinoamérica"
      slug="ndt-erp-solution"
      canonicalPath="/es/ndt-erp-solution"
      englishPath="/ndt-erp-solution"
      pageTitle="Solución integral Atlantis NDT ERP | ERP especializado para Ensayos No Destructivos"
      pageDescription="Solución ERP integral para empresas de Ensayos No Destructivos en Latinoamérica. Gestión de proyectos, certificaciones, calibración, facturación, inventario y control documental ISO 9001."
      keywords="solución NDT integral, ERP ensayos no destructivos, gestión empresa inspección, ISO 9001, ASNT, API, certificaciones técnicos, calibración equipos"
      marketContext="Las empresas de Ensayos No Destructivos en Latinoamérica enfrentan desafíos operativos únicos que los sistemas ERP de propósito general como SAP, Oracle o NetSuite no pueden resolver sin personalización costosa. Estos desafíos incluyen el seguimiento de certificaciones del personal en múltiples metodologías (ASNT SNT-TC-1A, ISO 9712, ABENDI en Brasil, IRAM-IAS en Argentina, ICONTEC en Colombia, calificaciones específicas de Pemex en México), la gestión de calibración de equipos de inspección según ASTM E797 e ISO 17025, la generación de reportes en formatos API específicos con firma y sello digital, y el seguimiento de intervalos de inspección basada en riesgo (RBI) según API RP 580 y los requisitos específicos de operadores latinoamericanos como Petrobras, Pemex, Ecopetrol, YPF y PDVSA. La solución integral Atlantis NDT ERP ofrece una plataforma unificada que reúne todas estas funciones, con integraciones nativas con QuickBooks Online, SAP S/4HANA, Microsoft Dynamics 365, Contabilium y Alegra para gestión financiera, además de módulos de gestión de proyectos, portal de clientes y subcontratistas. La solución fue desarrollada con aportes directos de la comunidad END en Houston, Hyderabad, Buenos Aires y Bogotá, y actualmente da servicio a más de 127 empresas de inspección en todo el mundo con una calificación promedio de 4,8 sobre 5."
      roiBody="Los clientes de la solución integral Atlantis reportan una reducción del 40% en tiempo administrativo durante los primeros seis meses de despliegue, una reducción del ciclo de facturación de 45 días a 18 días en promedio, y la desaparición de incidentes de vencimiento de certificaciones gracias a las alertas automáticas. El módulo de gestión de proyectos reduce el tiempo de elaboración de cotizaciones en un 60%, mientras que el módulo de inventario vinculado a equipos de inspección reduce el tiempo necesario para confirmar la disponibilidad de equipos para un nuevo proyecto de horas a minutos. Para una empresa de inspección mediana con 50 empleados en Latinoamérica, esto representa un ahorro anual estimado entre 220.000 y 310.000 dólares estadounidenses, además de mejorar la preparación para auditorías y reducir el riesgo de perder contratos con clientes mayoritarios como Petrobras, Pemex, Ecopetrol o YPF."
      painPoints={[
        {
          title: "Los ERPs generales no se adaptan",
          problem:
            "SAP, Oracle y NetSuite requieren personalización costosa (200.000 a 500.000 dólares) para agregar funciones específicas del sector END, como seguimiento de certificaciones ASNT o plantillas de reporte API, con resultados frecuentemente insatisfactorios.",
          solution:
            "La solución Atlantis llega lista con todas las funciones especializadas en END desde el día uno sin ninguna personalización, con un precio anual desde 18.000 dólares para empresas de inspección pequeñas.",
        },
        {
          title: "Las hojas de cálculo no escalan",
          problem:
            "Muchas empresas de inspección dependen de planillas Excel para rastrear certificaciones, equipos y proyectos, lo que provoca errores humanos y pérdida de datos cuando la empresa crece y contrata más técnicos.",
          solution:
            "Plataforma unificada en la nube que maneja miles de registros en tiempo real, con copias de seguridad automáticas y permisos de acceso granulares para cada rol funcional.",
        },
        {
          title: "Falta de integración entre departamentos",
          problem:
            "Muchas empresas de inspección utilizan sistemas separados para contabilidad (QuickBooks, Contabilium), gestión de proyectos (Trello, Asana) y seguimiento de certificaciones (Excel), creando silos de datos y duplicación de entrada manual.",
          solution:
            "Solución integral que vincula los datos financieros con los datos de proyectos y los datos del personal en tiempo real, con integraciones nativas con QuickBooks, SAP, Contabilium y Microsoft Dynamics.",
        },
      ]}
      modules={[
        {
          title: "Gestión de técnicos y personal",
          description:
            "Rastree cada certificación — ASNT SNT-TC-1A, ISO 9712, ABENDI, IRAM-IAS, ICONTEC, NAS 410 — con matriz de métodos, registros de agudeza visual (Jaeger #2 / Snellen 20/30), fechas de retest anual y cartas del empleador. Alertas automáticas a 90, 60 y 30 días antes del vencimiento.",
          features: [
            "Seguimiento multi-metodología: UT, RT, MT, PT, VT, ET",
            "Registros anuales de agudeza visual",
            "Fechas de retest y cartas de empleador",
            "Alertas automáticas de vencimiento",
            "Matriz de calificaciones por cliente",
          ],
        },
        {
          title: "Seguimiento de calibración de equipos",
          description:
            "Intervalos de calibración según ASTM E797, ASTM E1316 e ISO 17025. Registros de trazabilidad NIST. Ciclo de vida de bloques, transductores e instrumentos. Alertas de fuera de tolerancia detienen automáticamente el despliegue en campo.",
          features: [
            "Rastreador de fechas de calibración",
            "Trazabilidad NIST",
            "Ciclo de vida de bloques patrón",
            "Alertas de fuera de tolerancia",
            "Archivo de certificados con hash SHA-256",
          ],
        },
        {
          title: "Gestión de proyectos y órdenes de trabajo",
          description:
            "Oferta → cotización → orden de compra → programación → ejecución en campo → reporte → factura. Matriz RACI por proyecto. Portal de subcontratistas para trabajo de cliente del cliente.",
          features: [
            "Flujo completo de oferta a factura",
            "Rentabilidad por proyecto",
            "Utilización de técnicos individual",
            "Matriz RACI",
            "Portal de subcontratistas",
          ],
        },
        {
          title: "Control de procedimientos y documentos",
          description:
            "Práctica escrita (WP), procedimientos (según ASME Sección V Artículo 1, ISO 17635), instrucciones y justificaciones técnicas. Con control de versiones con fechas de vigencia, fechas de vencimiento y firma de Nivel III aprobado.",
          features: [
            "Control de versiones de procedimientos",
            "Firma de Nivel III aprobado",
            "Distribución automática a personal autorizado",
            "Cumplimiento con ISO 9001:2015 §7.5",
            "Biblioteca de plantillas ASME BPVC",
          ],
        },
        {
          title: "Gestión financiera y facturación",
          description:
            "Multi-moneda y multi-jurisdicción fiscal. Integraciones nativas con QuickBooks Online, Xero, SAP S/4HANA, Microsoft Dynamics 365, Contabilium, Alegra y SIIGO Nube.",
          features: [
            "Multi-moneda (USD, MXN, BRL, ARS, COP)",
            "Integración QuickBooks/Xero/SAP/Contabilium",
            "Costos de bienes vendidos por proyecto",
            "Facturación automática por hito",
            "Cumplimiento GAAP/IFRS/IVA",
          ],
        },
        {
          title: "Portal de clientes y subcontratistas",
          description:
            "Acceso instantáneo del cliente al progreso del proyecto, reportes completados y facturas. Portal de subcontratistas para entrega de trabajos y reportes.",
          features: [
            "Acceso del cliente 24/7",
            "Portal de entrega de subcontratistas",
            "Notificaciones automáticas",
            "Archivo de reportes completados",
            "Seguimiento de estado de facturas",
          ],
        },
      ]}
      integrations={[
        "QuickBooks Online, Xero, SAP S/4HANA",
        "Microsoft Dynamics 365, Contabilium, Alegra",
        "Seguimiento ASNT SNT-TC-1A",
        "Plantillas de reporte API 510, API 570, API 653",
        "ASTM E797 e ISO 17025 para calibración",
        "ISO 9001:2015 para control documental",
        "Portales de proveedores de Petrobras, Pemex, Ecopetrol, YPF",
        "Integración con Maximo, SAP PM, IBM CMMS",
      ]}
      faqs={[
        {
          question: "¿Cuál es la diferencia entre la solución Atlantis y SAP u Oracle?",
          answer:
            "SAP y Oracle requieren personalización costosa (200.000 a 500.000 dólares) y períodos de implementación de hasta 18 meses para agregar funciones específicas del sector END. La solución Atlantis llega lista con todas estas funciones desde el día uno, con un precio anual desde 18.000 dólares y un período de implementación de 4 a 6 semanas para una empresa de inspección típica.",
        },
        {
          question: "¿El sistema soporta empresas de inspección multi-sede?",
          answer:
            "Sí. La solución fue diseñada para empresas de inspección con múltiples oficinas en diferentes países latinoamericanos, con panel unificado para ver todas las operaciones, separación de datos por sede, múltiples monedas y impuestos, y soporte en español, portugués brasileño, inglés y árabe.",
        },
        {
          question: "¿Cuál es el costo de suscripción anual?",
          answer:
            "El paquete básico comienza en 18.000 dólares anuales para empresas de inspección pequeñas (hasta 10 técnicos) y llega a 120.000 dólares anuales para empresas grandes multi-sede (más de 100 técnicos). Todos los paquetes incluyen actualizaciones, soporte técnico en español y alojamiento en la nube.",
        },
        {
          question: "¿Se pueden importar nuestros datos históricos desde hojas de cálculo?",
          answer:
            "Sí. El equipo de implementación proporciona plantillas Excel para importar activos, equipos, registros de empleados y proyectos históricos. Un especialista de implementación dedicado valida los datos antes del despliegue, y normalmente la migración de datos y el go-live se completan en 4 a 6 semanas.",
        },
        {
          question: "¿El sistema cumple con los requisitos de soberanía de datos en Latinoamérica?",
          answer:
            "Sí. El sistema está alojado en servidores seguros en centros de datos certificados con ISO 27001. Para clientes que requieren alojamiento local en países específicos (para cumplir con la LGPD brasileña o la Ley de Protección de Datos colombiana), ofrecemos opciones de alojamiento en centros de datos regionales certificados en São Paulo, México D.F. y Bogotá.",
        },
      ]}
      ui={ui}
    />
  );
}

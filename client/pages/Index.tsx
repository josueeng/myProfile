import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Trophy,
  GraduationCap,
  Briefcase,
  Code,
  Languages,
  Star,
  Zap,
  Terminal,
  Database,
  Globe,
  Cpu,
  Layers,
  Monitor,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

const MatrixRain = () => {
  const [drops, setDrops] = useState<number[]>([]);

  useEffect(() => {
    const newDrops = Array.from({ length: 30 }, () => Math.random() * 100);
    setDrops(newDrops);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      {drops.map((drop, i) => (
        <div
          key={i}
          className="absolute text-primary text-xs animate-matrix font-mono"
          style={{
            left: `${drop}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        >
          {Math.random() > 0.5 ? "1" : "0"}
        </div>
      ))}
    </div>
  );
};

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-10 sm:top-20 left-4 sm:left-20 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-20 sm:top-40 right-8 sm:right-32 w-4 h-4 sm:w-6 sm:h-6 border-2 border-primary/50 rounded-full"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 sm:bottom-40 left-8 sm:left-32 w-2 h-2 sm:w-3 sm:h-3 bg-primary border rounded-sm opacity-70"
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

const TechIcon = ({ icon: Icon, delay = 0 }: { icon: any; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-glass rounded-xl flex items-center justify-center border-subtle hover-lift flex-shrink-0"
  >
    <Icon className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
  </motion.div>
);

export default function Index() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <MatrixRain />
      <FloatingElements />

      {/* Animated Background Grid */}
      <div className="fixed inset-0 tech-grid opacity-30" />

      {/* Gradient Overlays */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-transparent to-background opacity-90" />
      <div className="fixed inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5" />

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-border/50"
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <nav className="flex items-center justify-between w-full">
            <motion.div
              className="text-lg sm:text-xl md:text-2xl font-bold text-gradient font-mono flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              &lt;JGL/&gt;
            </motion.div>
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {["Sobre", "Skills", "Experiência", "Projetos", "Contato"].map(
                (item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm xl:text-base text-foreground/80 hover:text-primary transition-all duration-300 relative group font-medium whitespace-nowrap"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </motion.a>
                ),
              )}
            </div>
            <div className="lg:hidden">
              <Button variant="ghost" size="sm" className="text-foreground p-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 overflow-hidden w-full">
        <div className="w-full max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative inline-block mb-6 md:mb-8"
          >
            <div className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-card to-secondary rounded-2xl flex items-center justify-center text-lg xs:text-xl sm:text-2xl md:text-4xl font-bold shadow-2xl border border-border hover-lift">
              <span className="text-gradient font-mono">&lt;JGL/&gt;</span>
            </div>
            <motion.div
              className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center animate-pulse-smooth"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Zap className="w-3 h-3 md:w-4 md:h-4 text-white" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 break-words px-2"
          >
            <span className="text-gradient font-mono">Josué G.</span>{" "}
            <span className="text-foreground">Lopes</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6 md:mb-8"
          >
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 px-2">
              <span className="text-foreground">Desenvolvedor</span>{" "}
              <span className="text-primary font-mono">Fullstack</span>
            </h2>
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-medium mb-4 md:mb-6 text-muted-foreground px-2">
              <span className="text-foreground">Fundador da</span>{" "}
              <span className="text-primary font-semibold">Aprendly</span> 🚀
            </h3>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4 md:mb-6 px-2 max-w-4xl mx-auto">
              {[
                "React",
                "Node.js",
                "TypeScript",
                "Python",
                "Mobile Dev",
                "AI",
              ].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-glass border-subtle rounded-lg text-xs sm:text-sm font-medium text-foreground hover-lift cursor-default flex-shrink-0"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-sm xs:text-base sm:text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed font-light px-4"
          >
            🚀 Desenvolvedor apaixonado por tecnologia de ponta e fundador da
            startup Aprendly. Especializado em criar soluções inovadoras e
            eficientes. Medalhista em olimpíadas acadêmicas e sempre em busca
            dos próximos desafios tecnológicos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center px-4 max-w-2xl mx-auto"
          >
            <Button
              size="lg"
              className="text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-6 bg-green-600 hover:bg-green-700 text-white font-medium shadow-lg hover:shadow-xl hover-lift transition-all duration-300 w-full sm:w-auto"
            >
              <Phone className="mr-2 md:mr-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              <a href="https://api.whatsapp.com/send/?phone=5587999196460&text=Estou+pronto+para+transformar+a+minha+empresa&type=phone_number&app_absent=0">WhatsApp</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-6 border-border text-foreground hover:bg-muted bg-glass-light hover-lift transition-all duration-300 w-full sm:w-auto"
            >
              <Github className="mr-2 md:mr-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              <a href="https://github.com/josueeng">Ver Projetos</a>
            </Button>
          </motion.div>

          {/* Tech Icons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex justify-center space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8 mt-8 sm:mt-12 md:mt-16 px-4 max-w-full overflow-hidden"
          >
            <TechIcon icon={Code} delay={1.2} />
            <TechIcon icon={Database} delay={1.3} />
            <TechIcon icon={Globe} delay={1.4} />
            <TechIcon icon={Smartphone} delay={1.5} />
            <TechIcon icon={Cpu} delay={1.6} />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 md:py-20 px-4 md:px-6 relative w-full"
      >
        <div className="w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-semibold px-2">
              Skills
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-primary to-gray-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Monitor,
                title: "Frontend",
                skills: ["React", "TypeScript", "Next.js", "TailwindCSS"],
                color: "from-primary to-blue-600",
              },
              {
                icon: Database,
                title: "Backend",
                skills: ["Node.js", "Python", "Express", "PostgreSQL"],
                color: "from-gray-600 to-gray-700",
              },
              {
                icon: Layers,
                title: "DevOps & AI",
                skills: ["Docker", "AWS", "Machine Learning", "Power BI"],
                color: "from-gray-700 to-gray-800",
              },
            ].map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="hover-lift"
              >
                <Card className="bg-glass border-subtle hover:border-primary/50 transition-all duration-500 h-full">
                  <CardHeader className="text-center p-6 md:p-8">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 animate-float shadow-lg`}
                    >
                      <category.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl text-foreground font-semibold">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 md:px-8 md:pb-8">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, j) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + j * 0.1 }}
                          className="px-2 py-1 sm:px-3 sm:py-1.5 bg-muted border-subtle rounded-lg text-xs sm:text-sm font-medium text-muted-foreground"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experiência"
        className="py-16 md:py-20 px-4 md:px-6 relative w-full"
      >
        <div className="w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-semibold px-2">
              Experiência
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-primary to-gray-600 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-glass border-subtle hover:border-primary/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-50" />
              <CardHeader className="relative z-10 p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl sm:text-2xl md:text-3xl text-foreground mb-2 font-semibold">
                      <Briefcase className="inline mr-3 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
                      Zucchetti C4
                    </CardTitle>
                    <CardDescription className="text-base sm:text-lg md:text-xl text-primary font-semibold">
                      Especialista em Suporte Técnico
                    </CardDescription>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/20 border-blue-500 text-blue-400 w-fit"
                  >
                    2020 - 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {[
                    "🔧 Suporte técnico em sistemas ERP/CRM",
                    "🐛 Diagnóstico e resolução de bugs",
                    "👥 Treinamento de novos usuários",
                    "🤝 Colaboração com equipe de desenvolvimento",
                    "📊 Documentação e relatórios Power BI",
                    "⚡ Otimização de performance de sistemas",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start space-x-3 p-3 bg-glass rounded-lg border border-primary/20"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full animate-glow mt-2 flex-shrink-0" />
                      <span className="text-foreground/90 text-sm sm:text-base">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Education & Awards */}
      <section className="py-16 md:py-20 px-4 md:px-6 relative w-full">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 md:mb-8 font-semibold px-2">
                Formação
              </h2>
              <Card className="bg-glass border-subtle hover:border-primary/50 transition-all duration-300 mb-6">
                <CardHeader className="p-6 md:p-8">
                  <CardTitle className="text-xl sm:text-2xl text-foreground flex items-center">
                    <GraduationCap className="mr-3 h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    Uniasselvi
                  </CardTitle>
                  <CardDescription className="text-base sm:text-lg">
                    Desenvolvimento de Software
                    <Badge className="ml-2 bg-yellow-500/20 border-yellow-500 text-yellow-400 text-xs">
                      Em andamento
                    </Badge>
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="space-y-3">
                {[
                  "Desenvolvimento Fullstack – Vai na Web",
                  "Desenvolvimento Mobile – Em andamento",
                  "Python e IA – DIO (Suzano)",
                  "Web Fullstack – Digital House",
                  "Node.js Fundamental – DIO",
                  "JavaScript Developer – DIO",
                ].map((course, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center space-x-3 p-3 bg-glass rounded-lg border border-primary/20"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-foreground/90 text-sm sm:text-base font-medium">
                      {course}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 md:mb-8 font-semibold px-2">
                Premiações
              </h2>
              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    icon: Trophy,
                    title: "Medalha de Bronze",
                    event: "Olimpíada Nacional de Matemática",
                    color: "from-amber-600 to-yellow-600",
                    iconColor: "text-amber-100",
                  },
                  {
                    icon: Trophy,
                    title: "Medalha de Prata",
                    event: "Olimpíada Pernambucana de Astronomia",
                    color: "from-slate-500 to-slate-600",
                    iconColor: "text-slate-100",
                  },
                  {
                    icon: Star,
                    title: "Top 5",
                    event: "Startup Experience Estácio",
                    color: "from-primary to-blue-600",
                    iconColor: "text-blue-100",
                  },
                ].map((award, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="hover-lift"
                  >
                    <Card className="bg-glass border-subtle hover:border-primary/50 transition-all duration-300">
                      <CardHeader className="flex flex-row items-center space-y-0 space-x-4 p-6 md:p-8">
                        <div
                          className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r ${award.color} flex items-center justify-center shadow-lg`}
                        >
                          <award.icon
                            className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${award.iconColor}`}
                          />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg sm:text-xl text-foreground">
                            {award.title}
                          </CardTitle>
                          <CardDescription className="text-sm sm:text-base text-foreground/80">
                            {award.event}
                          </CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Conversion Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="w-full max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 md:mb-6 px-2 break-words">
              Pronto para <span className="text-gradient">Transformar</span> seu
              Negócio?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              Transformo ideias em soluções digitais de alta performance. Vamos
              criar algo extraordinário juntos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {[
              {
                icon: "⚡",
                title: "Desenvolvimento Ágil",
                description:
                  "Entrego projetos com rapidez e qualidade excepcional",
              },
              {
                icon: "🚀",
                title: "Tecnologias Modernas",
                description: "Uso as ferramentas mais avançadas do mercado",
              },
              {
                icon: "💡",
                title: "Soluções Personalizadas",
                description: "Cada projeto é único e pensado para seu sucesso",
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="hover-lift"
              >
                <Card className="bg-glass border-subtle h-full text-center p-6 md:p-8">
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-glass border-subtle rounded-2xl p-6 sm:p-8 md:p-12 text-center"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 px-4 break-words">
              Vamos deixar sua empresa mais{" "}
              <span className="text-primary">desenvolvida</span>?
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
              Seja para criar um novo sistema, modernizar sua aplicação ou
              desenvolver uma solução completa, estou aqui para tornar sua visão
              realidade.
            </p>

            {/* Enhanced WhatsApp Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block w-full max-w-md mx-auto px-4"
            >
              <Button
                size="lg"
                className="text-base sm:text-lg md:text-xl lg:text-2xl px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-6 lg:py-8 bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-700 hover:via-green-600 hover:to-green-700 text-white font-bold shadow-2xl hover:shadow-green-500/25 transition-all duration-500 rounded-2xl border-2 border-green-400/20 relative overflow-hidden group w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <Phone className="mr-2 sm:mr-3 md:mr-4 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 animate-pulse flex-shrink-0" />
                <span className="relative z-10 text-center">
                  <span className="block sm:hidden">              <a href="https://api.whatsapp.com/send/?phone=5587999196460&text=Estou+pronto+para+transformar+a+minha+empresa&type=phone_number&app_absent=0">Me aciona no WhatsApp! 🚀</a>
                  </span>
                  <span className="hidden sm:block md:hidden">
                    
                    <a href="https://api.whatsapp.com/send/?phone=5587999196460&text=Estou+pronto+para+transformar+a+minha+empresa&type=phone_number&app_absent=0">Me aciona no WhatsApp! 🚀</a>

                  </span>
                  <span className="hidden md:block">
                    Me aciona no WhatsApp! 🚀

                  </span>
                </span>
              </Button>
            </motion.div>

            <p className="text-xs sm:text-sm md:text-base text-muted-foreground mt-3 sm:mt-4 font-mono px-4">
              (87) 9 9919-6460
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section
        id="contato"
        className="py-16 md:py-20 px-4 md:px-6 relative w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="w-full max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 px-2">
              Outras Formas de Contato
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-gray-600 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              {[
                {
                  icon: Mail,
                  title: "Email Profissional",
                  value: "josue.programador@hotmail.com",
                  color: "from-blue-600 to-primary",
                  action: "Enviar Email",
                },
                {
                  icon: MapPin,
                  title: "Localização",
                  value: "Pernambuco, Brasil",
                  color: "from-gray-600 to-gray-700",
                  action: "Ver Região",
                },
                {
                  icon: Briefcase,
                  title: "Minha Startup",
                  value: "Fundador da Aprendly",
                  color: "from-primary to-blue-600",
                  action: "Conhecer",
                },
              ].map((contact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="hover-lift"
                >
                  <Card className="bg-glass border-subtle hover:border-primary/50 transition-all duration-500 h-full group">
                    <CardHeader className="text-center p-6 md:p-8">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      >
                        <contact.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                      </div>
                      <CardTitle className="text-base sm:text-lg md:text-xl text-foreground mb-2">
                        {contact.title}
                      </CardTitle>
                      <CardDescription className="text-sm md:text-base text-muted-foreground font-medium mb-4 break-words">
                        {contact.value}
                      </CardDescription>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-border text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-300 text-xs sm:text-sm"
                      >
                        {contact.action}
                      </Button>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links and Languages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Social Links */}
              <div className="text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-6 px-2">
                  Conecte-se Comigo
                </h3>
                <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-border text-foreground hover:bg-muted bg-glass-light hover-lift transition-all duration-300 px-6 md:px-8 w-full sm:w-auto"
                  >
                    <Github className="h-5 w-5 md:h-6 md:w-6 mr-3" />
                    <a href="https://github.com/josueeng"><span className="hidden sm:inline">Projetos no </span>GitHub</a>

                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-border text-foreground hover:bg-muted bg-glass-light hover-lift transition-all duration-300 px-6 md:px-8 w-full sm:w-auto"
                  >
                    <Linkedin className="h-5 w-5 md:h-6 md:w-6 mr-3" />
                    <a href="https://www.linkedin.com/in/devjosue/">                    <span className="hidden sm:inline">Perfil no </span>LinkedIn
                    </a>                  </Button>
                </div>
              </div>

              {/* Languages */}
              <div className="max-w-2xl mx-auto">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-6 text-center px-2">
                  Idiomas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-4">
                  {[
                    {
                      name: "Português",
                      level: "Nativo",
                      color: "text-green-500",
                      icon: Languages,
                    },
                    {
                      name: "Espanhol",
                      level: "Fluente",
                      color: "text-primary",
                      icon: Languages,
                    },
                    {
                      name: "Inglês",
                      level: "Básico",
                      color: "text-slate-400",
                      icon: Languages,
                    },
                  ].map((lang, i) => (
                    <div
                      key={i}
                      className="p-4 md:p-6 bg-glass rounded-xl border-subtle text-center hover-lift"
                    >
                      <lang.icon
                        className={`h-6 w-6 md:h-8 md:w-8 ${lang.color} mx-auto mb-3`}
                      />
                      <div className="text-sm md:text-base font-semibold text-foreground">
                        {lang.name}
                      </div>
                      <div
                        className={`text-xs md:text-sm ${lang.color} font-medium`}
                      >
                        {lang.level}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 md:px-6 border-t border-border/20 bg-glass w-full">
        <div className="w-full max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-foreground/60 font-mono text-sm sm:text-base">
              © 2025 Josué G. Lopes - Todos os direitos reservados
            </p>

          </motion.div>
        </div>
      </footer>
    </div>
  );
}

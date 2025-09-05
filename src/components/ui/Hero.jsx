import { motion } from "framer-motion";
import { Brain, Zap, Target, TrendingUp } from "lucide-react";
import { Badge, Card } from "antd";
import PageContainer from "../layout/PageContainer";
import { Box } from "@mui/material";

export default function Hero37() {
  const aiFeatures = [
    { icon: Brain, title: "Smart AI", value: "99.9%", label: "Accuracy" },
    { icon: Zap, title: "Lightning", value: "< 100ms", label: "Response" },
    { icon: Target, title: "Precision", value: "10x", label: "Faster" },
    { icon: TrendingUp, title: "Growth", value: "+250%", label: "Performance" },
  ];

  return (
    <section className="hero-theme-37 bg-[#0A0A0A] text-white min-h-screen flex flex-col items-center py-10 relative overflow-hidden">
      {/* Neural pattern background */}
      <Box className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 90%, #00ff99 1px, transparent 1px),
              radial-gradient(circle at 90% 10%, #00ffcc 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, #00ffaa 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px, 120px 120px, 160px 160px",
            opacity: 0.15,
          }}
          animate={{
            backgroundPosition: [
              "0% 0%",
              "100% 100%",
              "0% 0%", // loop back
            ],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </Box>

      <PageContainer>
        <Box className="relative z-10 text-center">
          {/* Glowing Badge */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Box className="relative">
              <Box className="absolute inset-0 blur-xl rounded-full bg-gradient-to-r from-green-400 to-green-600 opacity-30"></Box>
              <Badge
                variant="outline"
                className="relative z-10 bg-[#1A1A1A] text-white px-6 py-3 text-base font-medium border border-white/10 shadow-md flex items-center"
              >
                <Brain className="w-5 h-5 mr-2 animate-pulse" />
                Powered by Advanced AI
              </Badge>
            </Box>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Next-Gen
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #22c55e, #86efac)",
              }}
            >
              AI Platform
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Harness the power of artificial intelligence to transform your
            business. Our cutting-edge AI tools provide unprecedented insights
            and automation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.div {...motion.buttonHover}>
              <button className="px-6 py-2.5 text-lg border border-white/20 text-white hover:bg-white/10 rounded-xl  transition-all duration-300">
                Start AI Journey
              </button>
            </motion.div>

            <motion.div {...motion.buttonHover}>
              <button className="px-6 py-2.5 text-lg border border-white/20 text-white hover:bg-white/10 rounded-xl  transition-all duration-300">
                Watch Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={motion.container}
            initial="hidden"
            animate="visible"
          >
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={motion.item}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 text-center bg-[#121212]/70 border border-white/10 shadow-md rounded-xl">
                  <Box className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </Box>
                  <Box className="text-2xl font-bold text-green-300 mb-1">
                    {feature.value}
                  </Box>
                  <Box className="text-sm text-gray-400">{feature.label}</Box>
                  <Box className="text-xs font-medium text-white mt-1">
                    {feature.title}
                  </Box>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Box>
      </PageContainer>
    </section>
  );
}

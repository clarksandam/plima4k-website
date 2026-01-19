"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Smartphone, Wifi, Tv, Apple, Monitor, Radio, Zap, Copy, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

type Device = "android" | "firestick" | "smarttv" | "apple" | "windows" | "enigma2" | "mag"

interface DeviceConfig {
  id: Device
  name: string
  icon: React.ReactNode
  content: React.ReactNode
}

export function SetupGuideDevices() {
  const [selectedDevice, setSelectedDevice] = useState<Device>("android")
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const devices: DeviceConfig[] = [
    {
      id: "android",
      name: "Android",
      icon: <Smartphone className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Action: Download the APK</h3>
            <p className="text-muted-foreground mb-4">Download the PLIMA4K APK directly to your Android device.</p>
            <a
              href="https://4ktvz.com/promax.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Download APK
              <Zap className="w-4 h-4" />
            </a>
          </div>
          <div className="bg-card/50 border border-primary/20 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-primary">Important:</span> Enable "Apps from Unknown Sources" in your
              device settings before installing.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "firestick",
      name: "Amazon Firestick",
      icon: <Wifi className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Step 1: Install Downloader App</h3>
            <p className="text-muted-foreground mb-3">
              Search for and install the "Downloader" app from your Fire Stick app store.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Step 2: Enter Code</h3>
            <p className="text-muted-foreground mb-3">Open Downloader and enter this code to get Cap Player:</p>
            <div className="flex items-center gap-2 bg-card/50 border border-primary/20 rounded-lg p-3 backdrop-blur-sm">
              <code className="font-mono text-primary font-semibold">9125847</code>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => copyToClipboard("9125847", "firestick-code")}
                className="ml-auto"
              >
                {copiedId === "firestick-code" ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "smarttv",
      name: "Smart TVs (Samsung/LG/Android TV)",
      icon: <Tv className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Install IBO Player</h3>
            <p className="text-muted-foreground mb-4">
              1. Open your TV's App Store
              <br />
              2. Search for "IBO Player"
              <br />
              3. Click "Install"
              <br />
              4. Wait for installation to complete
            </p>
          </div>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-sm text-foreground font-semibold">Ready to enjoy PLIMA4K on your TV!</p>
          </div>
        </div>
      ),
    },
    {
      id: "apple",
      name: "Apple (iOS/Apple TV)",
      icon: <Apple className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Install IBO Player from App Store</h3>
            <p className="text-muted-foreground mb-4">Download IBO Player directly from the Apple App Store:</p>
            <a
              href="https://apps.apple.com/us/app/ibo-player/id1547652240"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Get IBO Player
              <Zap className="w-4 h-4" />
            </a>
          </div>
        </div>
      ),
    },
    {
      id: "windows",
      name: "Windows PC",
      icon: <Monitor className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Install IBO Player</h3>
            <p className="text-muted-foreground mb-4">Download the Windows installer:</p>
            <a
              href="https://iboplayer.com/app_downloads/ibo_installer.exe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Download Installer
              <Zap className="w-4 h-4" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">Run the installer and follow the on-screen instructions.</p>
        </div>
      ),
    },
    {
      id: "enigma2",
      name: "Enigma 2 Devices",
      icon: <Radio className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Using PuTTY Terminal</h3>
            <p className="text-muted-foreground mb-3">Connect via SSH and run this command:</p>
            <div className="flex items-start gap-2 bg-card/50 border border-primary/20 rounded-lg p-4 backdrop-blur-sm">
              <code className="font-mono text-xs md:text-sm text-primary/80 break-all flex-1">
                wget -O /etc/enigma2/IPTV.sh "your m3u link" && chmod 777 /etc/enigma2/IPTV.sh && /etc/enigma2/IPTV.sh
              </code>
              <Button
                size="sm"
                variant="ghost"
                onClick={() =>
                  copyToClipboard(
                    'wget -O /etc/enigma2/IPTV.sh "your m3u link" && chmod 777 /etc/enigma2/IPTV.sh && /etc/enigma2/IPTV.sh',
                    "enigma2-cmd",
                  )
                }
                className="flex-shrink-0"
              >
                {copiedId === "enigma2-cmd" ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-3">Replace "your m3u link" with your actual M3U link.</p>
          </div>
        </div>
      ),
    },
    {
      id: "mag",
      name: "MAG Devices",
      icon: <Zap className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Portal Configuration</h3>
            <p className="text-muted-foreground mb-4">
              1. Go to Settings → Portals
              <br />
              2. Select "Portal 1"
              <br />
              3. Set Portal 1 to "Host Up"
            </p>
          </div>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-sm text-foreground font-semibold mb-2">Portal URL</p>
            <p className="text-sm text-muted-foreground">
              Check your email for the Portal URL. You'll receive it upon account activation.
            </p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Choose Your Device
        </h2>

        {/* Device Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {devices.map((device, index) => (
            <motion.button
              key={device.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedDevice(device.id)}
              className={`p-4 rounded-lg transition-all border backdrop-blur-sm ${
                selectedDevice === device.id
                  ? "bg-gradient-to-r from-primary to-accent border-primary/50 text-white shadow-lg shadow-primary/50"
                  : "bg-card/50 border-card hover:border-primary/30 text-foreground hover:bg-card/80"
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                {device.icon}
                <span className="text-xs md:text-sm font-semibold">{device.name}</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Device Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDevice}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-card/50 to-card/30 border border-primary/20 rounded-2xl p-8 backdrop-blur-md"
          >
            {devices.find((d) => d.id === selectedDevice)?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

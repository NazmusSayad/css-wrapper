/* eslint-disable react/no-unknown-property */
'use client'

export function HeroCodeAnimations() {
  return (
    <div className="pointer-events-none absolute inset-0 size-full overflow-hidden [mask-image:linear-gradient(to_top,black_0%,transparent_100%)] [mask-size:100%_100%] [mask-repeat:no-repeat] opacity-30">
      <style jsx>{`
        .float-up {
          animation: floatUp 4s ease-in-out infinite;
        }

        .slide-fade {
          animation: slideFade 3s ease-in-out infinite;
        }

        .scale-pulse {
          animation: scalePulse 2.5s ease-in-out infinite;
        }

        .wave-motion {
          animation: waveMotion 5s ease-in-out infinite;
        }

        .binary-flicker {
          animation: binaryFlicker 3s linear infinite;
        }

        .binary-slide {
          animation: binarySlide 4s ease-in-out infinite;
        }

        .binary-fade {
          animation: binaryFade 2.8s ease-in-out infinite;
        }

        .cursor-glow {
          animation: cursorGlow 1.5s ease-in-out infinite alternate;
        }

        .type-writer {
          animation: typeWriter 4s steps(40) infinite;
        }

        .progress-fill {
          animation: progressFill 3s ease-in-out infinite;
        }

        @keyframes floatUp {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px) scale(1.05);
            opacity: 1;
          }
        }

        @keyframes slideFade {
          0%,
          100% {
            transform: translateX(0px);
            opacity: 0.7;
          }
          50% {
            transform: translateX(5px);
            opacity: 1;
          }
        }

        @keyframes scalePulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }

        @keyframes waveMotion {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-5px) translateX(3px);
          }
          75% {
            transform: translateY(5px) translateX(-3px);
          }
        }

        @keyframes binaryFlicker {
          0%,
          100% {
            opacity: 0.3;
          }
          25% {
            opacity: 0.8;
          }
          50% {
            opacity: 0.1;
          }
          75% {
            opacity: 0.6;
          }
        }

        @keyframes binarySlide {
          0%,
          100% {
            transform: translateX(0px);
            opacity: 0.4;
          }
          50% {
            transform: translateX(8px);
            opacity: 0.8;
          }
        }

        @keyframes binaryFade {
          0%,
          100% {
            opacity: 0.2;
            transform: translateY(0px);
          }
          50% {
            opacity: 0.7;
            transform: translateY(-3px);
          }
        }

        @keyframes cursorGlow {
          0% {
            opacity: 0.5;
            transform: scaleY(1);
          }
          100% {
            opacity: 1;
            transform: scaleY(1.2);
          }
        }

        @keyframes typeWriter {
          0%,
          10% {
            width: 0%;
          }
          90%,
          100% {
            width: 100%;
          }
        }

        @keyframes progressFill {
          0% {
            width: 0%;
            opacity: 0.5;
          }
          50% {
            width: 75%;
            opacity: 1;
          }
          100% {
            width: 100%;
            opacity: 0.8;
          }
        }
      `}</style>

      <div className="absolute inset-0 font-mono text-xs">
        <div className="float-up absolute top-8 left-[5%] rounded border px-2 py-1">width</div>
        <div className="slide-fade absolute top-16 right-[8%] rounded border px-2 py-1">
          padding
        </div>
        <div className="wave-motion absolute top-20 right-[20%] rounded border px-2 py-1">
          container
        </div>

        <div className="binary-slide absolute top-[35%] left-[8%] rounded border px-2 py-1">
          display
        </div>
        <div className="scale-pulse absolute top-[45%] right-[15%] rounded border px-2 py-1">
          flex
        </div>
        <div className="wave-motion absolute top-[50%] left-[15%] rounded border px-2 py-1">
          grid
        </div>

        <div className="binary-flicker absolute bottom-[42%] left-[7%] rounded border px-2 py-1">
          margin
        </div>
        <div className="float-up absolute right-[6%] bottom-[38%] rounded border px-2 py-1">
          position
        </div>
        <div className="slide-fade absolute bottom-[33%] left-[11%] rounded border px-2 py-1">
          height
        </div>
        <div className="scale-pulse absolute right-[14%] bottom-[28%] rounded border px-2 py-1">
          responsive
        </div>
        <div className="binary-fade absolute bottom-[24%] left-[19%] rounded border px-2 py-1">
          transform
        </div>
        <div className="wave-motion absolute right-[9%] bottom-[19%] rounded border px-2 py-1">
          opacity
        </div>
        <div className="binary-slide absolute bottom-[14%] left-[26%] rounded border px-2 py-1">
          filter
        </div>
        <div className="float-up absolute right-[22%] bottom-[11%] rounded border px-2 py-1">
          shadow
        </div>
        <div className="scale-pulse absolute bottom-[7%] left-[17%] rounded border px-2 py-1">
          blur
        </div>
        <div className="wave-motion absolute bottom-[16%] left-[63%] rounded border px-2 py-1">
          border
        </div>
        <div className="binary-slide absolute bottom-[9%] left-[58%] rounded border px-2 py-1">
          radius
        </div>
        <div className="float-up absolute bottom-[21%] left-[67%] rounded border px-2 py-1">
          outline
        </div>
        <div className="binary-fade absolute right-[31%] bottom-[13%] rounded border px-2 py-1">
          z-index
        </div>
        <div className="slide-fade absolute bottom-[4%] left-[72%] rounded border px-2 py-1">
          rotate
        </div>
        <div className="scale-pulse absolute right-[18%] bottom-[26%] rounded border px-2 py-1">
          cursor
        </div>
      </div>

      <div className="absolute inset-0 font-mono text-xs opacity-20">
        <div className="binary-flicker absolute top-[20%] left-[8%]">01001000</div>
        <div className="binary-slide absolute top-[30%] right-[12%]">11010011</div>

        <div className="binary-fade absolute right-[11%] bottom-[31%]">10001111</div>
        <div className="binary-flicker absolute bottom-[23%] left-[28%]">11001010</div>
        <div className="binary-slide absolute right-[19%] bottom-[17%]">01011100</div>
        <div className="binary-fade absolute bottom-[8%] left-[33%]">10110010</div>
        <div className="binary-flicker absolute bottom-[18%] left-[51%]">11100101</div>
        <div className="binary-slide absolute bottom-[12%] left-[47%]">01001110</div>
        <div className="binary-fade absolute bottom-[5%] left-[61%]">10101011</div>
        <div className="binary-flicker absolute right-[7%] bottom-[29%]">11010100</div>
        <div className="binary-slide absolute right-[28%] bottom-[15%]">01110010</div>
      </div>

      <div className="cursor-glow absolute top-20 left-[50%] h-4 w-px bg-current" />

      <div className="absolute bottom-4 left-4 font-mono text-sm opacity-30">
        <span className="type-writer overflow-hidden whitespace-nowrap">
          $ generate-wrapper --width=1200px --responsive
        </span>
      </div>

      <div className="absolute top-4 right-4 font-mono text-xs opacity-50">
        <div className="scale-pulse">Compiling CSS...</div>
        <div className="mt-1 h-1 w-16 overflow-hidden rounded border">
          <div className="progress-fill h-full bg-current"></div>
        </div>
      </div>
    </div>
  )
}

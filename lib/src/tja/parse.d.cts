export default function parseTJA(tja: string): {
    headers: {
        title: string
        subtitle: string
        bpm: number
        wave: string
        offset: number
        demoStart: number
        genre: string
    }
    courses: Record<
        number,
        {
            course: number
            headers: {
                course: string
                level: number
                balloon: number[]
                scoreInit: number
                scoreDiff: number
                ttRowBeat: number
            }
            measures: {
                length: [dividend: number, divisor: number]
                properties: {
                    ttBreak?: boolean
                }
                data: string
                events: (
                    | {
                          name: 'bpm' | 'scroll'
                          position: number
                          value: number
                      }
                    | {
                          name: 'gogoStart' | 'gogoEnd'
                          position: number
                      }
                )[]
            }[]
        }
    >
}

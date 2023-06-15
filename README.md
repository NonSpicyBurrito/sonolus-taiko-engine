# Sonolus Taiko Engine

A recreation of Taiko no Tatsujin engine in [Sonolus](https://sonolus.com).

## Links

-   [Sonolus Website](https://sonolus.com)
-   [Sonolus Wiki](https://github.com/NonSpicyBurrito/sonolus-wiki)

## Installation

```
npm install sonolus-taiko-engine
```

## Custom Resources

### Skin Sprites

| Name                            |
| ------------------------------- |
| `Taiko Drum`                    |
| `Taiko Drum Don Left`           |
| `Taiko Drum Don Right`          |
| `Taiko Drum Ka Left`            |
| `Taiko Drum Ka Right`           |
| `Taiko Touch Drum`              |
| `Taiko Don`                     |
| `Taiko Dai Don`                 |
| `Taiko Ka`                      |
| `Taiko Dai Ka`                  |
| `Taiko Balloon`                 |
| `Taiko Dai Balloon`             |
| `Taiko Balloon Attachment`      |
| `Taiko Drumroll`                |
| `Taiko Dai Drumroll`            |
| `Taiko Drumroll Tail`           |
| `Taiko Dai Drumroll Tail`       |
| `Taiko Drumroll Connection`     |
| `Taiko Dai Drumroll Connection` |

### Effect Clips

| Name        |
| ----------- |
| `Taiko Don` |
| `Taiko Ka`  |

## Documentation

### `version`

Package version.

### `engineInfo`

Partial engine information compatible with [sonolus-express](https://github.com/NonSpicyBurrito/sonolus-express).

### `engineConfiguration`

Engine Configuration.

-   `engineConfiguration.path`: path to file.
-   `engineConfiguration.buffer`: buffer of file.
-   `engineConfiguration.hash`: hash of file.

### `engineData`

Engine Data.

-   `engineData.path`: path to file.
-   `engineData.buffer`: buffer of file.
-   `engineData.hash`: hash of file.

### `engineThumbnail`

Engine Thumbnail.

-   `engineThumbnail.path`: path to file.
-   `engineThumbnail.buffer`: buffer of file.
-   `engineThumbnail.hash`: hash of file.

### `osuToTJC(osu)`

Converts osu to TJC (Taiko no Tatsujin Chart).

-   `osu`: osu.

### `tjaToTJC(tja, courseId)`

Converts TJA to TJC (Taiko no Tatsujin Chart).

-   `tja`: TJA.
-   `courseId`: course ID.

### `tjcToLevelData(tjc, offset?)`

Converts TJC (Taiko no Tatsujin Chart) to Level Data.

-   `tjc`: Taiko no Tatsujin chart.
-   `offset`: offset (default: `0`).

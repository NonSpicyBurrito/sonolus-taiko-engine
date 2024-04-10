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
| `Taiko Balloon Attachment 1`    |
| `Taiko Balloon Attachment 2`    |
| `Taiko Balloon Attachment 3`    |
| `Taiko Balloon Attachment 4`    |
| `Taiko Balloon Attachment 5`    |
| `Taiko Balloon Attachment 6`    |
| `Taiko Balloon Attachment 7`    |
| `Taiko Balloon Attachment 8`    |
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

### `databaseEngineItem`

Partial database engine item compatible with [sonolus-express](https://github.com/NonSpicyBurrito/sonolus-express).

### `engineConfigurationPath`

Path to Engine Configuration file.

### `enginePlayDataPath`

Path to Engine Play Data file.

### `engineWatchDataPath`

Path to Engine Watch Data file.

### `enginePreviewDataPath`

Path to Engine Preview Data file.

### `engineTutorialDataPath`

Path to Engine Tutorial Data file.

### `engineThumbnailPath`

Path to Engine Thumbnail file.

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

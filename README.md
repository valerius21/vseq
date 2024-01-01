<p align="center">
  <img src="./vseq_logo.png" />
</p>

# vseq

`vseq` is a versatile and lightweight utility designed for generating sequences of numbers, offering functionality akin to [GNU coreutils - seq](https://www.gnu.org/software/coreutils/manual/html_node/seq-invocation.html). Building upon [lodash.range](https://lodash.com/docs/4.17.15#range), `vseq` extends its capabilities, providing greater flexibility in sequence generation.

Easily specify start, end, and step values to tailor sequences to your needs.

## Features

- **Customizable Sequences:** Define start, end, and step values for tailored number sequences.
- **Inclusive Range:** Unlike traditional range functions, `vseq` includes the end number in the sequence.
- **Lightweight and Fast:** Optimized for performance and ease of use.

## Installation

Quickly integrate `vseq` into your project using your preferred package manager:

### npm

```bash
npm install vseq
```

**yarn:**

```bash
yarn add vseq
```

**pnpm:**

```bash
pnpm add vseq
```

**bun:**

```bash
bun add vseq
```

## Documentation

You can find the documentation for `vseq` on

https://tsdocs.dev/docs/vseq/lastest/index.html

## Example Usage

```ts
import { seq } from 'vseq';

// Generate a sequence from 1 to 5
const sequence = seq(1, 5);
console.log(sequence); // Output: [1, 2, 3, 4, 5]
```

## Contributing

Contributions to vseq are always welcome, whether it's bug reports, feature requests, or pull requests. 

## License

vseq is open-source software licensed under the MIT License.

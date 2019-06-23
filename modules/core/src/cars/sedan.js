// Copyright (c) 2019 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
import {mirrorMesh} from './utils';

export default (length = 4.6, width = 2.4, height = 1.5) => {
  /* eslint-disable max-length */
  // prettier-ignore
  const indices = [];
  // prettier-ignore
  const positions = [];
  // prettier-ignore
  const normals = []; /* eslint-enable max-length */
  const meshSize = [4, 2, 1.5];

  const halfDeltaX = (length - meshSize[0]) / 2;
  const halfDeltaY = (width - meshSize[1]) / 2;
  const deltaZ = height - meshSize[2];

  const vertexSize = positions.length;
  // Stretch to desired model size
  for (let i = 0; i < vertexSize; i += 3) {
    const x = positions[i];
    const y = positions[i + 1];
    const z = positions[i + 2];

    positions[i] = x + Math.sign(x) * halfDeltaX;
    positions[i + 1] = y > 0 ? y + halfDeltaY : 0;
    positions[i + 2] = z > 1.2 ? z + deltaZ : z;
  }

  return mirrorMesh({indices, positions, normals});
};

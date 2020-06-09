import * as React from "react";
import { useState, useRef } from "react";
import QRCode from "qrcode.react";

import {
  Container,
  Title,
  Header,
  Input,
  Select,
  FieldGroup,
  Field,
  Button
} from "./styles";

type RenderType = "canvas" | "svg";
type LevelType = "L" | "M" | "Q" | "H";

export default function App() {
  const qrcodeRef = useRef<any>(null);
  const [link, setLink] = useState("http://facebook.github.io/react/");
  const [renderType, setRenderType] = useState<RenderType>("canvas");
  const [size, setSize] = useState<number>(256);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [fgColor, setFgColor] = useState("#000000");
  const [level, setLevel] = useState<LevelType>("L");
  const [includeMargin, setIncludeMargin] = useState(false);

  function handlExportQRCode() {
    const ref = qrcodeRef.current;

    if (ref) {
      const canvas = ref.querySelector("canvas") as HTMLCanvasElement;

      if (canvas) {
        const anchor = document.createElement("a");
        anchor.href = canvas.toDataURL();
        anchor.download = "qrcode.png";
        anchor.click();
      } else {
        const svg = ref.querySelector("svg") as SVGAElement;

        if (svg) {
          var serializedSVG = new XMLSerializer().serializeToString(svg);
          const anchor = document.createElement("a");
          anchor.href = "data:image/svg+xml;base64," + btoa(serializedSVG);
          anchor.download = "qrcode.svg";
          anchor.click();
        }
      }
    }
  }

  return (
    <Container>
      <Header>
        <Title>QRcode Gen</Title>
        <div ref={qrcodeRef}>
          <QRCode
            style={{ border: "1px solid black" }}
            value={link}
            renderAs={renderType}
            size={size}
            bgColor={bgColor}
            fgColor={fgColor}
            level={level}
            includeMargin={includeMargin}
          />
        </div>
      </Header>
      <Field>
        <label>Link</label>
        <Input value={link} onChange={e => setLink(e.target.value)} />
      </Field>
      <FieldGroup>
        <Field>
          <label>Type</label>
          <Select
            value={renderType}
            onChange={e => setRenderType(e.target.value as RenderType)}
          >
            <option value="canvas">PNG Image</option>
            <option value="svg">SVG Image</option>
          </Select>
        </Field>
        <Field>
          <label>Size</label>
          <Input
            type="number"
            step="1"
            min="64"
            max="1024"
            value={size}
            onChange={e => setSize(Number(e.target.value))}
          />
        </Field>
        <Field>
          <label>Bg Color</label>
          <Input
            type="color"
            value={bgColor}
            onChange={e => setBgColor(e.target.value)}
          />
        </Field>
        <Field>
          <label>Fg Color</label>
          <Input
            type="color"
            value={fgColor}
            onChange={e => setFgColor(e.target.value)}
          />
        </Field>
        <Field>
          <label>Type</label>
          <Select
            value={level}
            onChange={e => setLevel(e.target.value as LevelType)}
          >
            <option value="L">L</option>
            <option value="M">M</option>
            <option value="Q">Q</option>
            <option value="H">H</option>
          </Select>
        </Field>
      </FieldGroup>

      <FieldGroup>
        <div>
          <label>
            <input
              type="checkbox"
              checked={includeMargin}
              onClick={() => setIncludeMargin(!includeMargin)}
            />
            {"  Include Margin"}
          </label>
        </div>
      </FieldGroup>

      <Button onClick={handlExportQRCode}>Download</Button>
    </Container>
  );
}

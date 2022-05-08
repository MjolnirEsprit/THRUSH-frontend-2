import { Card } from "@material-ui/core";
import "@google/model-viewer";
import { BaseLayout } from "../../components/common/layout";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const style = {
  dispo: `flex w-full inline-block mt-5 justify-center items-center`,
  itemm: `flex inline-block`,
};

const itemData = [
  {
    mod: "/xiaotiqin.glb",
  },
  {
    mod: "/guitar.glb",
  },
  {
    mod: "/guitar2.glb",
  },
  {
    mod: "/gangqin.glb",
  },
  {
    mod: "/trumpet.gltf",
  },
];

export default function ViewModel() {
  return (
    <ImageList
      className={style.dispo}
      sx={{ height: 800 }}
      cols={3}
      rowHeight={164}
    >
      {itemData.map((item) => {
        return (
          <Card>
            <ImageListItem style={{ height: 320, width: 400 }} key={item.title}>
              <model-viewer
                className={style.itemm}
                style={{ height: 320, width: 400 }}
                camera-controls
                shadow-intensity="1"
                src={item.mod}
              ></model-viewer>
            </ImageListItem>
          </Card>
        );
      })}
    </ImageList>
  );
}

ViewModel.Layout = BaseLayout;

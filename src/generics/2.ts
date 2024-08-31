type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type nameColor = Pick<AllType, "name" | "color">;
type postitonWeight = Pick<AllType, "position" | "weight">;

function compare(top: nameColor, bottom: postitonWeight): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

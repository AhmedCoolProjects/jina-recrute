import Image, { StaticImageData } from "next/image";

type InfosCardItemProps = {
  cle: string;
  value: string;
};

export function InfosCardItem(props: InfosCardItemProps) {
  const { cle, value } = props;
  return (
    <div className="flex  flex-row items-center space-x-2 my-1">
      <h1 className="font-semibold w-[150px] text-base">{cle}:</h1>
      <h1 className="text-xl font-semibold text-opacity-80">{value}</h1>
    </div>
  );
}

type InfosCardItemListImageProps = {
  cle: string;
  list?: string[];
  image?: StaticImageData;
};

export function InfosCardItemListImage(props: InfosCardItemListImageProps) {
  const { cle, list, image } = props;
  return (
    <div className="flex  flex-row items-center space-x-2 my-1">
      <h1 className="font-semibold w-[150px] text-base">{cle}:</h1>
      {list
        ? list.map((listItem) => (
            <span
              className="capitalize font-medium"
              key={listItem}
            >{`${listItem}, `}</span>
          ))
        : null}
      {image ? (
        <Image
          src={image}
          width={60}
          className="rounded-full ml-4"
          height={60}
          alt={cle}
        />
      ) : null}
    </div>
  );
}

export default function ExperienceItem({ item }) {
  console.log(item);
  return (
    <div>
      <div className="flex items-center gap-5">
        <p className="font-semibold">{item?.name}</p>
        <p className="bg-gray-300 rounded-full px-4 text-sm">
          {item?.startYear} - {item?.endYear}
        </p>
      </div>
      <p className="text-sm">{item?.description}</p>
    </div>
  );
}

import Wrapper from "@/components/global/Wrapper";

export default function page(): React.ReactElement {
  return (
    <main>
      <Wrapper title="This is home page">
        <div className="grid grid-cols-3 gap-4">
            <div className="h-70 px-16 card card-body card-bordered shadow-lg bg-base-300
                cursor-pointer hover:shadow-xl hover:bg-secondary hover:scale-[105%]
                ease-in-out duration-300  ">
                <div className="flex item-centers gap-4">
                  <div className="w-50 h-50 rounded-full bg-primary p-2">IMG</div>
                  <p className="font-semibold text-lg">Username | Email</p>
                </div>
                
                <p className="overflow-y-auto text-md">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum dolorem beatae deleniti vel, eaque alias corrupti? Dolor in eligendi sapiente incidunt nihil voluptates rem, similique tenetur quae a consequatur quisquam.
                </p>
            </div>
            
        </div>
      </Wrapper>
    </main>
  );
}

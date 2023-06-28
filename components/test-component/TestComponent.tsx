export interface props {
  title: string;
  is_active?: boolean;
  item_name?: string;
  price?: number;
}

function TestComponent({
  title,
  is_active,
  item_name,
  price,
}: props) {
  return (
    <div class="w-full container  py-8 flex flex-col gap-12 lg:gap-16 lg:py-10">
      <div class="flex flex-col gap-4">
        <h1 class="text-3xl lg:text-4xl text-center uppercase">{title}</h1>
        <div class="flex flex-col gap-4 text-center">
          {is_active
            ? (
              <>
                <p class="text-lg text-green-400">Active</p>

                <div class="justify-items-center bg-slate-400">
                  <h3 class="text-center">{item_name}</h3>
                  <h4 class="text-sm">The value is: $ {price}</h4>
                  <button class="btn-square"></button>
                </div>
              </>
            )
            : <p class="text-lg text-red-400">Not Active</p>}
        </div>
      </div>
    </div>
  );
}

export default TestComponent;

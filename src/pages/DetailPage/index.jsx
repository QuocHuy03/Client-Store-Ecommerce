import Layout from "../../components/libs/Layout";

const DetailPage = () => {
  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              <div className="flex flex-col-reverse">
                <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                  <div
                    className="grid grid-cols-4 gap-6"
                    role="tablist"
                    aria-orientation="horizontal"
                  >
                    <button
                      className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white"
                      id="headlessui-tabs-tab-:r14:"
                      role="tab"
                      type="button"
                      aria-selected="true"
                      tabIndex={0}
                      data-headlessui-state="selected"
                      aria-controls="headlessui-tabs-panel-:r17:"
                    >
                      <div>
                        <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                          <img
                            alt
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover object-center"
                            sizes="100vw"
                            srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=3840&q=75 3840w"
                            src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=3840&q=75"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              color: "transparent",
                            }}
                          />
                        </span>
                        <span className="absolute inset-0 rounded-md ring-2 ring-offset-2 ring-black" />
                      </div>
                    </button>
                    <button
                      className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white"
                      id="headlessui-tabs-tab-:r15:"
                      role="tab"
                      type="button"
                      aria-selected="false"
                      tabIndex={-1}
                      data-headlessui-state
                      aria-controls="headlessui-tabs-panel-:r18:"
                    >
                      <div>
                        <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                          <img
                            alt
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover object-center"
                            sizes="100vw"
                            srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069744%2Fpdqapdkdgzsblj5akows.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069744%2Fpdqapdkdgzsblj5akows.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069744%2Fpdqapdkdgzsblj5akows.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069744%2Fpdqapdkdgzsblj5akows.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069744%2Fpdqapdkdgzsblj5akows.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069744%2Fpdqapdkdgzsblj5akows.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069744%2Fpdqapdkdgzsblj5akows.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069744%2Fpdqapdkdgzsblj5akows.jpg&w=3840&q=75 3840w"
                            src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069744%2Fpdqapdkdgzsblj5akows.jpg&w=3840&q=75"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              color: "transparent",
                            }}
                          />
                        </span>
                        <span className="absolute inset-0 rounded-md ring-2 ring-offset-2 ring-transparent" />
                      </div>
                    </button>
                    <button
                      className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white"
                      id="headlessui-tabs-tab-:r16:"
                      role="tab"
                      type="button"
                      aria-selected="false"
                      tabIndex={-1}
                      data-headlessui-state
                      aria-controls="headlessui-tabs-panel-:r19:"
                    >
                      <div>
                        <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                          <img
                            alt
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover object-center"
                            sizes="100vw"
                            srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069740%2Fgxtjh5nya0vpc1co1ter.webp&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069740%2Fgxtjh5nya0vpc1co1ter.webp&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069740%2Fgxtjh5nya0vpc1co1ter.webp&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069740%2Fgxtjh5nya0vpc1co1ter.webp&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069740%2Fgxtjh5nya0vpc1co1ter.webp&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069740%2Fgxtjh5nya0vpc1co1ter.webp&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069740%2Fgxtjh5nya0vpc1co1ter.webp&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069740%2Fgxtjh5nya0vpc1co1ter.webp&w=3840&q=75 3840w"
                            src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069740%2Fgxtjh5nya0vpc1co1ter.webp&w=3840&q=75"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              color: "transparent",
                            }}
                          />
                        </span>
                        <span className="absolute inset-0 rounded-md ring-2 ring-offset-2 ring-transparent" />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="aspect-square w-full">
                  <div
                    id="headlessui-tabs-panel-:r17:"
                    role="tabpanel"
                    tabIndex={0}
                    data-headlessui-state="selected"
                    aria-labelledby="headlessui-tabs-tab-:r14:"
                  >
                    <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                      <img
                        alt
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center"
                        sizes="100vw"
                        srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=3840&q=75"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: 0,
                          color: "transparent",
                        }}
                      />
                    </div>
                  </div>
                  <span
                    id="headlessui-tabs-panel-:r18:"
                    role="tabpanel"
                    tabIndex={-1}
                    aria-labelledby="headlessui-tabs-tab-:r15:"
                    style={{
                      position: "fixed",
                      top: 1,
                      left: 1,
                      width: 1,
                      height: 0,
                      padding: 0,
                      margin: "-1px",
                      overflow: "hidden",
                      clip: "rect(0px, 0px, 0px, 0px)",
                      whiteSpace: "nowrap",
                      borderWidth: 0,
                    }}
                  />
                  <span
                    id="headlessui-tabs-panel-:r19:"
                    role="tabpanel"
                    tabIndex={-1}
                    aria-labelledby="headlessui-tabs-tab-:r16:"
                    style={{
                      position: "fixed",
                      top: 1,
                      left: 1,
                      width: 1,
                      height: 0,
                      padding: 0,
                      margin: "-1px",
                      overflow: "hidden",
                      clip: "rect(0px, 0px, 0px, 0px)",
                      whiteSpace: "nowrap",
                      borderWidth: 0,
                    }}
                  />
                </div>
              </div>
              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    THOM BROWNE
                  </h1>
                  <p className="text-lg text-neutral-500">THOM BROWNE</p>
                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-2xl text-gray-900" />
                    <div className="font-semibold">10.000.000&nbsp;₫</div>
                    <p />
                  </div>
                  <hr className="my-4" />
                  <div className="flex flex-col gap-y-6">
                    <div className="flex items-center gap-x-4">
                      <h3 className="font-semibold"> Size: </h3>
                      <div>Extra Small</div>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <h3 className="font-semibold"> Color: </h3>
                      <div className="h-6 w-6 rounded-full border border-gray-600" />
                    </div>
                    <div className="flex items-center gap-x-4">
                      <h3 className="font-semibold"> Description: </h3>
                      <div className="text-lg">
                        Sản phẩm rất tốt và rất đáng sử dụng :))
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-4">
                      <div className="w-10 h-10 rounded-[1px] border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition ">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
                        </svg>
                      </div>
                      <div className="font-light text-xl text-neutral-600">
                        1
                      </div>
                      <div className=" w-10 h-10 rounded-[1px] border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition ">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          t={1551322312294}
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs />
                          <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" />
                          <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 flex items-center gap-x-3">
                    <button
                      type="button"
                      className="w-auto rounded-full bg-black border border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition flex items-center gap-x-2"
                    >
                      Add to Cart
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-shopping-cart"
                      >
                        <circle cx={8} cy={21} r={1} />
                        <circle cx={19} cy={21} r={1} />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-10" />
            <div className="space-y-4">
              <h3 className="font-bold text-3xl">Related Item</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
                  <div className="aspect-square rounded-xl bg-gray-100 relative">
                    <img
                      alt="Image"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="aspect-square object-cover rounded-md"
                      sizes="100vw"
                      srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=3840&q=75 3840w"
                      src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=3840&q=75"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: 0,
                        color: "transparent",
                      }}
                    />
                    <div className="opacity-0 group-hover:opacity-100 transition w-full px-6 bottom-5 absolute">
                      <div className="flex gap-x-6 justify-center">
                        <button className="rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-600"
                          >
                            <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
                            <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
                            <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
                            <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
                          </svg>
                        </button>
                        <button className="rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-600"
                          >
                            <circle cx={8} cy={21} r={1} />
                            <circle cx={19} cy={21} r={1} />
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">THOM BROWNE</p>
                    <p className="text-sm text-gray-500">THOM BROWNE</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">10.000.000&nbsp;₫</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailPage;

import React from "react";

const BlogContent = () => {
  return (
    <div className="relative isolate px-6 lg:px-8  pt-24 sm:pt-32">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
          Toute notre expertise en article
        </h2>
      </div>
      <div className="mx-auto max-w-7xl p-6 lg:p-8 grid gap-y-4 rounded-xl  mt-16">
        <div className="w-full h-[200px] rounded-lg overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1591684080176-bb2b73f9ec68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="isolation des combles"
            className="object-cover pointer-events-none w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
          <div className="absolute bottom-10 left-10 text-xl lg:text-2xl">
            <a
              href="/articles/conseils-travaux/isolation-des-combles-a-bordeaux-avec-terabois"
              className="text-white"
            >
              <h3 className="text-white">
                Isoler son logement,
                <br /> comment trouver la
                <br /> bonne entrepise ?
              </h3>
              <div className="text-sm font-normal leading-6 text-white">
                En savoir plus <span aria-hidden="true">→</span>
              </div>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-4">
          <div className="bg-logoOne rounded-lg relative overflow-hidden max-h-[250px]">
            <img
              src="https://images.unsplash.com/photo-1472342139520-1aa49517fed8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYyfHx0b2l0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
              alt="toiture bordeaux"
              className="object-cover pointer-events-none w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
            <div className="absolute bottom-10 left-10 text-lg lg:text-xl">
              <a
                href="/articles/conseils-travaux/couvreurs-bordeaux-avec-terabois"
                className="text-white"
              >
                <h3 className="text-white">
                  Terabois, l'entreprise de couverture
                  <br /> en gironde
                  <br /> qu'il vous faut
                </h3>
                <div className="text-sm font-normal leading-6 text-white">
                  En savoir plus <span aria-hidden="true">→</span>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-logoOne rounded-lg relative overflow-hidden max-h-[250px]">
            <img
              src="https://images.unsplash.com/photo-1595877244574-e90ce41ce089?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="nature"
              className="object-cover pointer-events-none w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
            <div className="absolute bottom-10 left-10 text-lg lg:text-xl">
              <a
                href="articles/conseils-travaux/terabois-isolation-bordeaux"
                className="text-white"
              >
                <h3 className="text-white">
                  Nous sommes les expert en
                  <br /> isolation à bordeaux,
                  <br /> decouvrez pourquoi
                </h3>
                <div className="text-sm font-normal leading-6 text-white">
                  En savoir plus <span aria-hidden="true">→</span>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-logoOne rounded-lg relative overflow-hidden max-h-[250px]">
            <img
              src="https://images.unsplash.com/photo-1617850687395-620757feb1f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVycmFzc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              alt="terrasse bois"
              className="object-cover pointer-events-none w-full object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
            <div className="absolute bottom-10 left-10 text-lg lg:text-xl">
              <a
                href="/articles/conseils-travaux/terrasse-en-bois-a-bordeaux-avec-terabois"
                className="text-white"
              >
                <h3 className="text-white">
                  Decouvrez nos terrasses
                  <br /> en bois
                  <br /> haut de gamme
                </h3>
                <div className="text-sm font-normal leading-6 text-white">
                  En savoir plus <span aria-hidden="true">→</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;

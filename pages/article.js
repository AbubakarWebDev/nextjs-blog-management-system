import React, { useState } from 'react'
import WithLayout from "../HOC/WithLayout";
import Loader from "../components/Loader";
import ArticleEditor from "../components/ArticleEditor";

function Article() {
  const [init, setInit] = useState(false);
  const [articleBody, setArticleBody] = useState(`
  <h1>Caelumque recepta animal cepit eurus</h1>
  <p>Illi ita zonae praecipites altae nisi parte orbis caeca. Dispositam galeae retinebat fuit aetas. Posset: aberant terras coeperunt. Cetera contraria. Boreas subsidere. Pulsant melior titan usu spectent dissaepserat metusque figuras quisquis uno.</p>
  <h2>Mundo frigore aethera piscibus unus</h2>
  <h3>Mundum ultima retinebat melior mundum</h3>
  <h4>Erectos neu humanas secuit sectamque</h4>
  <p>Aethera deorum. Fossae oppida pressa ardentior. Sidera spisso legebantur acervo. Traxit tumescere piscibus iuga prima fluminaque formaeque. Effigiem effervescere ventis alta aliud traxit onus. Legebantur umor mixta minantia quae quia ardentior freta tempora tonitrua.</p>
  <ul>
  <li>Oppida zonae ab lege semina cornua cum membra elementaque metusque longo ita primaque mutastis usu lumina mutatas coeptis galeae</li>
  <li>Formas emicuit distinxit aquae cuncta aera plagae nec omnia mundum rerum manebat tenent longo certis longo inposuit hominum</li>
  <li>Animal spisso adspirate illis aetas pronaque solidumque chaos: poena alta formas facientes regio obsistitur principio erectos distinxit spectent</li>
  <li>Ante caeca frigida secrevit orbem phoebe ille calidis otia frigore hunc onerosior seductaque erat: summaque effervescere nebulas humanas regat sine montibus aquae levius</li>
  </ul>
  <p>Habitandae caeleste proximus altae montibus cognati. Terris habitabilis deus conversa tractu litem non deerat? Fuerant rapidisque sic solum! Utramque stagna carmen caeleste congestaque ita. Minantia nulli titan aurea fluminaque! Declivia orbem pluviaque secant carmen madescit mutastis non.</p>
  <ol>
  <li>Meis meis quisquis quarum elementaque mortales aliud ligavit: undas circumfuso locis duae</li>
  <li>Declivia ventos tanta cinxit diremit boreas igni discordia homini inposuit totidemque semina dei prima invasit alta solum</li>
  <li>Piscibus contraria norant partim caeli sidera campoque quam orbem vis imagine umor sua membra zephyro ille porrexerat declivia vis igni evolvit carentem</li>
  <li>Solum natus hominum nix iuga ventos acervo montibus pendebat lanient principio cum liberioris habentem non nullus sidera illas crescendo super horrifer fulminibus tempora</li>
  </ol>
  <p>Sanctius aestu silvas postquam subsidere sua. Pontus dissaepserat dedit vultus quisque. Tegit onus facientes regna in tumescere non igni. Forma iuga effervescere descenderat fontes derecti capacius caesa. Moles inposuit. Hominum diremit? Diverso norant quisquis campoque stagna cura. Mea solum acervo coeptis exemit nubes.</p>`);

  function handleContent(content) {
    setArticleBody(content);
  }

  function handleInit(EditorInit) {
    setInit(EditorInit);
  }

  return (
    <>
      <Loader 
        className={`${init ? "hidden" : ""}`} 
        width='100px' 
        height='100px' 
        containerHeight='500px'
      />

      <div className={`container mx-auto ${init ? "" : "hidden"}`}>
        <ArticleEditor
          initialContent={articleBody}
          handleContent={handleContent}
          handleInit={handleInit}
          init={init}
        />
        <textarea
          disabled
          className="w-full h-[275px] my-6 p-5 border border-gray-300"
          value={articleBody}
        />
      </div>
    </>
  );
}

export default WithLayout(Article, {title: "Article"});
import styles from '@/styles/Home.module.css'
import { Code, PaperPlaneRight, TestTube, ChartBar, Copy, Trash, ArrowsOut, ArrowsIn, X, Gear } from 'phosphor-react'

import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';

function fixStartsWith(s: string) {
  if (s.startsWith('html')) {
    return s.slice(4);
  }
  else if (s.startsWith('css')) {
    return s.slice(3);
  }
  else if (s.startsWith('js')) {
    return s.slice(2);
  }
  else {
    return s;
  }
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<{ width: undefined | number, height: undefined | number }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

function generateRandomString() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

import InnerHTML from 'dangerously-set-html-content'
function sampleHtml() {
  return `html
<!DOCTYPE html>
<html>
<head>
	<title>Births per Year in the 2010s</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
	<div style="width: 600px; height: 400px">
		<canvas id="myChart"></canvas>
	</div>

  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
	<script>
    setTimeout(function () {
      // Define chart data and options
      var chartData = {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        datasets: [{
          label: 'Births per Year in the 2010s',
          data: [3944160, 3951590, 3955874, 3978553, 3996850, 3978493, 3953590, 3909585, 3859958, 3793792],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2
        }]
      };
  
      var chartOptions = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              callback: function(value, index, values) {
                return value.toLocaleString();
              }
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + tooltipItem.yLabel.toLocaleString();
            }
          }
        }
      };
  
      // Create chart using Chart.js
      var ctx = document.getElementById('myChart').getContext('2d');
      var chart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: chartOptions
      });  
    }, 100);
	</script>
</body>
</html>`
};

function sampleHtml2() {
  return `html
<!DOCTYPE html>
<html>
  <head>
    <title>Car Sales by Brand in 2018</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  </head>
  <body>
    <canvas id="myChart"></canvas>
    <script>
      setTimeout(() => {
        const ctx = document.getElementById("myChart");
        const myChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Toyota", "Ford", "Honda", "Chevrolet", "Nissan"],
            datasets: [
              {
                label: "Car Sales by Brand in 2018",
                data: [1000000, 800000, 600000, 500000, 400000],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          },
        });
      }, 500);
    </script>
  </body>
</html>
`
}

function sampleHtml3() {
  return `<!DOCTYPE html>
  <html>
  <head>
    <title>Grain Production Data</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  </head>
  <body>
    <h1>Grain Production Data</h1>
    <canvas id="myChart"></canvas>
  
    <script>
      setTimeout(function() {
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Wheat', 'Corn', 'Rice', 'Barley', 'Sorghum'],
            datasets: [{
              label: 'Production (million metric tons)',
              data: [758, 1146, 748, 153, 61],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      }, 500);
    </script>
  </body>
  </html>`
}

function getCodeBlocks(str: string) {
  const codeBlockRegex = /```[\s\S]*?```/g;
  const matches = str.match(codeBlockRegex);
  if (matches) {
    return matches.map(match => match.slice(3, -3));
  } else {
    return [str];
  }
}

function getLastCodeBlock(str: string) {
  const codeBlocks = getCodeBlocks(str);
  let longestBlock = 'err';
  for (const block of codeBlocks) {
    if (block.length > longestBlock.length) {
      longestBlock = block;
    }
  }
  return longestBlock;
}

import { ChatGPTUnofficialProxyAPI } from 'chatgpt'
import { FormEvent, useEffect, useState } from 'react'

let OPENAI_ACCESS_TOKEN = "TO_SET";
const LOADING_STATUS = <p>Asking ChatGPT...</p>

function instantiateGPTApi() {
  return new ChatGPTUnofficialProxyAPI({
    accessToken: OPENAI_ACCESS_TOKEN,
    apiReverseProxyUrl: 'https://api.pawan.krd/backend-api/conversation',
  });
}

type GPTResponse = {
  query: string,
  graph: React.ReactElement,
  code: string,
};

function gptify(graphQuery: string) {
  return `Generate sample data on ${graphQuery}. Use this data to generate a complete HTML document that uses chartJS to render the graph. Please output ONLY this HTML file and nothing else. I only want the HTML code block! Delay calling \`new Chart\` by 500ms, and be sure to give the chart a unique enough id to not conflict with other charts on the page.`
}

function GraphOrCode(props: { gptResponse: GPTResponse, isCodeView: boolean, isFullscreen: boolean, closeFullscreen?: () => void }) {
  return <div className={props.isFullscreen ? styles.graphCodeDivFullscreen : styles.graphCodeDiv}>
    {
      props.isCodeView ? <div className={styles.codeView}>
        <button className={styles.iconButton2} onClick={() => {
          navigator.clipboard.writeText(props.gptResponse.code);
          alert('Copied to clipboard!');
        }}><Copy size={'18px'} /></button>
        {
          props.isFullscreen && <button className={styles.iconButton3} onClick={() => {
            props.closeFullscreen?.();
          }}><X /></button>
        }
        {props.gptResponse.code}
      </div> : props.gptResponse.graph
    }
  </div>

}

function GPTResponseComponent(props: { gptResponse: GPTResponse, deleteGraph: () => void }) {
  const [isCodeView, setIsCodeView] = useState(false);
  const [isFullScreen, setIsFullscreen] = useState(false);

  return (
    <div className={styles.wholeResponse}>
      <div className={styles.graphRowAbove}>
        <p className={styles.graphHeaderText}>{props.gptResponse.query}</p>
        <div className={styles.graphRowButtons}>
          <button className={styles.iconButton} onClick={() => setIsCodeView(x => !x)}>
            {
              isCodeView ? <ChartBar size={'18px'} /> : <Code size={'18px'} />
            }
          </button>
          <button className={styles.iconButton} onClick={() => {
            confirm('Are you sure you want to delete this graph?') && props.deleteGraph();
          }}>
            <Trash size={'18px'} />
          </button>
          {
            isFullScreen ? <button className={styles.iconButton} onClick={() => setIsFullscreen(false)}><ArrowsIn size={'18px'} /></button> : <button className={styles.iconButton} onClick={() => setIsFullscreen(true)}><ArrowsOut size={'18px'} /></button>
          }

        </div>
      </div>
      {!isFullScreen && <GraphOrCode gptResponse={props.gptResponse} isCodeView={isCodeView} isFullscreen={false} />}
      <Modal
        open={isFullScreen} onClose={() => setIsFullscreen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'scroll' }}>
        <GraphOrCode gptResponse={props.gptResponse} isCodeView={isCodeView} isFullscreen={true} closeFullscreen={() => setIsFullscreen(false)} />
      </Modal>
      <hr className={styles.hrBtwn} />
    </div>
  )
}

export default function Home() {

  let api = instantiateGPTApi();

  const [gptResponses, setGptResponses] = useState<GPTResponse[]>([]);

  function pushGptResponse(response: GPTResponse) {
    setGptResponses([...gptResponses, response]);
  }

  function removeGptResponse(response: GPTResponse) {
    setGptResponses(gptResponses.filter(x => x !== response));
  }

  const [statusResponse, setStatusResponse] = useState<{ type: 'error' | 'loading' | 'none', elem: React.ReactElement | undefined }>({
    type: 'none',
    elem: undefined,
  });

  function addSample() {
    const rand = Math.random() < 0.5;
    const sample = rand ? sampleHtml() : sampleHtml2();
    pushGptResponse(
      {
        query: rand ? 'births per year 2010s' : 'most common car brands in 2018',
        graph: <InnerHTML html={fixStartsWith(sample.replaceAll('myChart', generateRandomString()))} />,
        code: sample,
        // graph: <div dangerouslySetInnerHTML={{ __html: sampleHtml }}></div>,
      }
    );
  }

  function onInputSubmit(event: FormEvent<HTMLFormElement>) {
    if (statusResponse.type === 'loading') return;
    setStatusResponse({ type: 'loading', elem: LOADING_STATUS });
    event.preventDefault();
    // @ts-expect-error
    const vizQuery = event.target.elements.text.value;

    const gptQuery = gptify(vizQuery);

    api.sendMessage(gptQuery).then((response) => {
      console.log(response.text);

      const finalHtml = fixStartsWith(getLastCodeBlock(response.text).replaceAll('myChart', generateRandomString()));

      console.log(finalHtml);
      const graph = <InnerHTML html={finalHtml} />;
      setStatusResponse({ type: 'none', elem: undefined });
      pushGptResponse({ query: vizQuery, graph, code: response.text });
    }).catch((error) => {
      console.log(error); setStatusResponse(
        {
          elem: <div>
            <p>An error occurred: {error.toString?.() ?? String(error)}</p>
          </div>,
          type: 'error',
        }
      )
    });
  }

  const { width, height } = useWindowSize();

  const [proceedAnyway, setProceedAnyway] = useState(false);
  if (!proceedAnyway && width && width <= 650) {
    return <>
      <div className={styles.smallWidthWarning}>
        <h4>StatGPT is best viewed on desktop / wider screens</h4>
        <button onClick={() => setProceedAnyway(true)}>Proceeed anyway</button>
      </div>
    </>
  }

  return (
    <>
      <div className={styles.main}>

        <div className={styles.responses}>
          <div className={styles.welcome}>
            <p>StatGPT is a ChatGPT wrapper that creates ChartJS charts from a prompt. Created by @jbuzzy00.</p>
            {/* <button className={styles.iconButton} onClick={() => {
              const newToken = prompt('Enter an accessToken for your OpenAI account from https://chat.openai.com/api/auth/session/');
              if (newToken) {
                const replacedToken = newToken.replaceAll('"', '').replaceAll("'", '');
                OPENAI_ACCESS_TOKEN = replacedToken;
                api = instantiateGPTApi();
              }
            }}>
              <Gear size={'18px'} />
            </button> */}

          </div>

          <hr className={styles.hr} />

          {gptResponses.map((x, i) => <GPTResponseComponent key={i} gptResponse={x} deleteGraph={() => removeGptResponse(x)} />)}
        </div>
        {statusResponse.elem &&
          <div className={styles.center}>
            <div className={styles.status}>
              {statusResponse.elem}
            </div>
          </div>
        }
        <div >
          <form className={styles.input} onSubmit={onInputSubmit}>
            <label className={styles.inputLabel}>
              <p>What would you like to visualize?</p>
              <div className={styles.inputText}>
                <input className={styles.inputTextText} type='text' name="text" />
                <button type='submit' className={styles.iconButton}>
                  <PaperPlaneRight size={'18px'} />
                </button>
                <button className={styles.iconButton} onClick={addSample} type='button'>
                  <TestTube size={'18px'} />
                </button>

              </div>
            </label>
          </form>
        </div>
      </div>
    </>
  )
}

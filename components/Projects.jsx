import React, { useState } from 'react';
import './ProjectSection.css';

function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Project data
  const projects = [
    {
      name: 'Proximal Policy Optimization',
      details: `
        <b>Project 1: Reinforcement Learning Model for Financial Asset Prediction</b><br/>
        <b>Project Overview:</b><br/>
        - Developed and evaluated a reinforcement learning model for financial asset prediction and trading.<br/><br/>

        <b>Stack Used:</b><br/>
        - Programming Language: Python<br/>
        - Libraries:
          - Pandas: For data manipulation and analysis.
          - NumPy: For numerical operations and array handling.
          - Psycopg2: PostgreSQL database adapter for Python.
          - Scikit-Learn: For preprocessing, scaling, and evaluation.
          - Stable Baselines3: For reinforcement learning model training.
          - Gym: For developing and comparing reinforcement learning algorithms.
          - Matplotlib: For data visualization.<br/><br/>

        <b>Purpose:</b><br/>
        - To create and test a reinforcement learning model that predicts asset prices and makes trading decisions.
        - Aimed to maximize trading rewards while managing transaction costs and holding penalties.<br/><br/>

        <b>Features:</b><br/>
        - Data Extraction:
          - Retrieved financial data from PostgreSQL.
          - Included indicators like 'DCP', 'DNCP', 'OPCP', etc.<br/><br/>
        - Feature Engineering:
          - Calculated percentage changes in prices to create target labels.
          - Scaled features for machine learning models.<br/><br/>
        - Reinforcement Learning Environment:
          - Created a custom Gym environment for trading actions (buy, sell, hold).
          - Tracked balance, holdings, and asset prices.<br/><br/>
        - Model Training:
          - Used Stable Baselines3's PPO for training.
          - Evaluated using rewards accumulated over episodes.<br/><br/>
        - Evaluation:
          - Assessed success rates and average rewards.
          - Generated plots for episode rewards, success rates, and price ratios.<br/><br/>

        <b>Results:</b><br/>
        - Training and Validation:
          - PPO model trained and validated within the custom environment.
          - Evaluated model effectiveness in predicting and trading.<br/><br/>
        - Visualization:
          - Plots illustrated episode rewards, success rates, price ratios, and average rewards.<br/><br/>

        <b>Complexity:</b><br/>
        - Involved data extraction, feature engineering, and reinforcement learning model training.
        - Required advanced evaluation and visualization techniques.<br/><br/>

        <b>Impact:</b><br/>
        - Enhanced trading strategies through informed decision-making.
        - Automated trading strategies for efficiency and potential profitability.
        - Provided insights for further improvements.<br/><br/>

        <b>Backend:</b><br/>
        - Database: PostgreSQL.
        - Data Processing: Python with Pandas and NumPy.
        - Machine Learning: Scikit-Learn and Stable Baselines3.
        - Visualization: Matplotlib.<br/><br/>
      `,
    },
    {
      name: 'Probability Forecast Network',
      details: `
        <b>Project 2: Probability Forecast Network</b><br/>
        <b>Project Overview:</b><br/>
        - Developed a probability forecast network to predict time series data with Bayesian inference.
        - Implemented a neural network with custom probabilistic layers to forecast and quantify prediction uncertainty.<br/><br/>

        <b>Stack Used:</b><br/>
        - Programming Language: Python<br/>
        - Libraries:
          - TensorFlow: For building and training the neural network model.
          - TensorFlow Probability: For probabilistic layers and Bayesian inference.
          - Scikit-Learn: For data preprocessing and normalization.
          - NumPy: For numerical operations and data manipulation.
          - SciPy: For statistical functions.
          - Matplotlib: For visualization.<br/><br/>

        <b>Backend Used:</b><br/>
        - Framework: TensorFlow and TensorFlow Probability
        - Data Processing: NumPy and Scikit-Learn
        - Statistical Analysis: SciPy<br/><br/>

        <b>How It Works:</b><br/>
        - Data Generation:
          - Generated synthetic time series data with patterns like trend, seasonal, noise, and abrupt changes.
          - Used this data for training and validating the model.<br/><br/>
        - Data Preprocessing:
          - Normalized features and target variables using MinMaxScaler from Scikit-Learn.
          - Reshaped data to fit the model requirements.<br/><br/>
        - Model Definition:
          - Created a custom DenseVariational layer using TensorFlow Probability for probabilistic modeling.
          - Defined a Sequential model with DenseVariational, Dropout, and Dense layers.
          - Implemented a custom loss function (ELBO) to optimize the model.<br/><br/>
        - Training:
          - Trained the model using Nadam optimizer with learning rate scheduling.
          - Used early stopping to prevent overfitting.<br/><br/>
        - Prediction and Evaluation:
          - Predicted on the validation set and calculated Bayesian inference bounds.
          - Evaluated using log-likelihood and residuals.<br/><br/>
        - Visualization:
          - Plotted actual vs predicted values with uncertainty bounds.
          - Simulated trading strategies and visualized performance.
          - Displayed residuals for each time step to analyze prediction accuracy.<br/><br/>

        <b>Complexity:</b><br/>
        - Model Complexity: Involves custom probabilistic layers for Bayesian inference, requiring advanced understanding of TensorFlow Probability and probabilistic modeling.
        - Data Handling: Requires handling and preprocessing time series data with various patterns.
        - Evaluation Metrics: Includes complex metrics like Bayesian inference bounds and log-likelihood.<br/><br/>

        <b>Visualization:</b><br/>
        - Plots comparing actual vs predicted values with uncertainty bounds.
        - Trading strategy performance visualization showing buy/sell signals and portfolio value.
        - Residual plots for analyzing prediction errors over time.<br/><br/>

        <b>Tools Used:</b><br/>
        - Development Environment: Python<br/>
        - Libraries: TensorFlow, TensorFlow Probability, Scikit-Learn, NumPy, SciPy, Matplotlib<br/><br/>

        <b>Language Used:</b><br/>
        - Python
      `,
    },
    {
      name: 'Simple Chatbot',
    details: `
      <b>Overview:</b>
      <ul>
        <li>A chatbot built using the Hugging Face Transformers library, utilizing a pre-trained conversational model.</li>
        <li>Capable of maintaining multi-turn conversations and generating responses based on user input.</li>
      </ul>

      <b>Technical Details:</b>
      <ul>
        <li>Programming Language: Python</li>
        <li>Backend: Uses Python with Hugging Face Transformers library</li>
        <li>Environment: Python virtual environment (venv) for dependency isolation</li>
      </ul>

      <b>Stack & Libraries:</b>
      <ul>
        <li>Virtual Environment: Python's venv</li>
        <li>Hugging Face Transformers: For loading pre-trained conversational models</li>
        <li>NLTK: Potential use for NLP preprocessing tasks</li>
        <li>PyTorch: Backend for model computation and inference</li>
        <li>Hugging Face Tokenizer: For tokenizing input text</li>
      </ul>

      <b>Model and Components:</b>
      <ul>
        <li>BlenderBot-400M-Distill: Conversational AI model from Facebook</li>
        <li>Transformer architecture for context-aware responses</li>
        <li>Hugging Face Conversation object for managing dialogue history</li>
      </ul>

      <b>Execution Settings:</b>
      <ul>
        <li>Max Length: 200 tokens for responses</li>
        <li>Min Length: 30 tokens</li>
        <li>Truncation enabled for longer sequences</li>
      </ul>

      <b>Process Flow:</b>
      <ul>
        <li>Environment setup with Python venv</li>
        <li>Model initialization using Hugging Face pipeline()</li>
        <li>Chat interaction loop for multi-turn dialogues</li>
        <li>Pre-trained model used for inference (no fine-tuning)</li>
      </ul>

      <b>Potential Enhancements:</b>
      <ul>
        <li>Deploy using Flask or FastAPI</li>
        <li>Fine-tune responses for specific domains</li>
        <li>Add logging/feedback for conversation quality improvement</li>
      </ul>
      `,
    },
    {
      name: 'Mental Health Chatbot',
    details: `
      <b>Overview:</b>
      <ul>
        <li>A chatbot built with a Flask backend, integrating GPT-2 for text generation</li>
        <li>Incorporates sentiment and intent analysis using Hugging Face Transformers</li>
      </ul>

      <b>Technical Details:</b>
      <ul>
        <li>Backend: Flask for API endpoints</li>
        <li>Text Generation: Fine-tuned GPT-2 model</li>
        <li>Analysis: Sentiment and intent recognition with Hugging Face Transformers</li>
        <li>Data Processing: PyPDF2 for PDF text extraction</li>
      </ul>

      <b>Libraries & Tools:</b>
      <ul>
        <li>Flask: Web framework for backend</li>
        <li>PyPDF2: PDF text extraction</li>
        <li>NLTK: Text preprocessing</li>
        <li>Hugging Face Transformers: GPT-2, sentiment analysis, intent recognition</li>
        <li>PyTorch: Deep learning engine for GPT-2</li>
      </ul>

      <b>Features:</b>
      <ul>
        <li>Mental health support chatbot with empathetic responses</li>
        <li>Integrated sentiment and intent analysis</li>
        <li>PDF processing for training data extraction</li>
      </ul>

      <b>Process Flow:</b>
      <ul>
        <li>Flask server receives POST request at /get_response</li>
        <li>Input processed for sentiment and intent</li>
        <li>GPT-2 generates contextual response</li>
        <li>Response sent back to user</li>
      </ul>

      <b>Potential Extensions:</b>
      <ul>
        <li>Integrate Cognitive Behavioral Therapy (CBT) techniques</li>
        <li>Add voice input/output capabilities</li>
        <li>Implement user interaction logging and mood tracking</li>
      </ul>
    `
,
    },

  ];

  const handleProjectClick = (index) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  return (
    <section className="projects-section">
      <h2 className="projects-main-heading">Project Highlights</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-box ${selectedProject === index ? 'active' : ''}`}
            onClick={() => handleProjectClick(index)}
          >
            {project.name}
          </div>
        ))}
      </div>
      {selectedProject !== null && (
        <div className="project-details-container">
          <div
            className="project-details"
            dangerouslySetInnerHTML={{ __html: projects[selectedProject].details }}
          />
        </div>
      )}
    </section>
  );
}

export default ProjectSection;

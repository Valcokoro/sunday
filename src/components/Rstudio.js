import React from 'react';
import '../styles/Projects.css';
import rpics1 from '../assets/rpics1.png';
import rpics2 from '../assets/rpics2.png';
import rpics3 from '../assets/rpics3.png';
import rpics4 from '../assets/rpics4.png';
import rpics5 from '../assets/rpics5.png';
import rpics6 from '../assets/rpics6.png';
import rpics7 from '../assets/rpics7.png';
import rpics8 from '../assets/rpics8.png';
import rpics9 from '../assets/rpics9.png';
import rpics10 from '../assets/rpics10.png';
import rpics11 from '../assets/rpics11.png';
import rpics12 from '../assets/rpics12.png';
import rpics13 from '../assets/rpics13.png';
import rpics14 from '../assets/rpics14.png';
import rpics15 from '../assets/rpics15.png';





const Rstudio = () => {
    return (
        <div className='flex-container'>
                <div className='flex-item'>
                    <h2 className='r-project'>R-Studio</h2>
                    <h3 className='r-project1'>Project 1 : <span className='cancer-diagnosis'>ANALYSIS OF CANCER DIAGNOSIS USING THE R STUDIO.</span></h3>
                    <h3 className='r-result1'>Results</h3>
                    <h4 className='cancer-data'>summary(cancer_data)</h4>
                    <img src={rpics1} className='r-pics1' alt='cancer data'/>
                    <h4 className='cancer-data_boxplot'>boxplot(cancer_data_n$texture_mean)</h4>
                    <img src={rpics2} className='r-pics2' alt='cancer data boxplot' />
                    <h4 className='cancer-data_histogram'>histogram(cancer_data_n$texture_mean)</h4>
                    <img src={rpics3} className='r-pics3' alt='cancer data histogram' />
                    <h4 className='set-seed'>
                        set.seed(1)<br/>
                        {`subset_int <- sample(nrow(cancer_data_n), floor(nrow(cancer_data_n)*0.8))`}<br/>
                        (subset_int)
                    </h4>
                    <img src={rpics4} className='r-pics4' alt='result'/>
                    <h4 className='cd_test'>{`cd_test_pred<-knn(train=cd_train, test=cd_test, cl=cd_train_labels, k=24)`}<br/>
                        (cd_test_pred)<br/>
                        cd-cancer disease
                    </h4>
                    <img src={rpics5} className='r-pics5' alt='result' />
                    <h4 className='cancer-data_confusionMatrix'>confusionMatrix(cd_test_pred,cd_test_labels)</h4>
                    <img src={rpics6} className='r-pics6' alt='confusionMatrix'/>

                    <div className='r-studio_project2'>
                    <h3 className='r-project2'>Project 2 : <span className='heart-disease'>DATA ANALYSIS OF THE HEART DISEASE USING R-SUDIO.</span></h3>
                    <h4 className='hd'>summary(hd)</h4>
                    <img src={rpics7} className='r-pics7' alt='summary'/>
                    <h4 className='hd_train'>set.seed(1)<br/>
                        {`train_index<-sample(nrow(hd), floor(0.8*nrow(hd)))`}<br/>
                        {`hd_train<-hd[train_index, ]`}<br/>
                        {`hd_test<-hd[-train_index, ]`}<br/>
                        hd_test
                    </h4>
                    <img src={rpics8} className='r-pics8' alt='train index'/>
                    <h4 className='hd_model'>{`hd_model<-rpart(heartDisease~age+cholesterol,data=hd_train,cp=0.01)`}</h4>
                    <img src={rpics9} className='r-pics9' alt='hd model'/>
                    <h4 className='rpart-plot'>rpart.plot(hd_model)</h4>
                    <img src={rpics10} className='r-pics10' alt='rpart plot'/>
                    <h4 className='rpart-rules'>rpart.rules(hd_model)</h4>
                    <img src={rpics11} className='r-pics11' alt='rpart rules'/>
                    <h4 className='hd_model2'>{`hd_model2<-rpart(heartDisease~.,data=hd_train,cp=0.01)`}</h4>
                    <img src={rpics12} className='r-pics12'  alt='hd model 2'/>
                    <h4 className='rpart-plot2'>rpart.plot(hd_model2)</h4>
                    <img src={rpics13} className='r-pics13' alt='rpart plot 2'/>
                    <h4 className='hd_pred'>confusionMatrix(hd_pred,hd_test$heartDisease)</h4>
                    <img src={rpics14} className='r-pics14' alt='confusionMatrix'/>
                    <h4 className='plotcp'>plotcp(hd_model2)</h4>
                    <img src={rpics15} className='r-pics15' alt='plotcp'/>
                    </div>
                </div>
            </div>

    )
}


export default Rstudio;
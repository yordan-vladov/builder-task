# builder-task

1. Създайте клас ``WebPage``, който да съдържа следните полета:
   - `title` - заглавието
   - `header` - хедъра
   - `content` - съдържанието
   - `footer` - футъра

2. Понеже една уеб страница може да съдържа каквато и да е комбинация от тези полета, създайте клас `WebPageBuilder`, който да създава уеб страници.

3. Напишете клас `WebPageDirector`, който да имплементира следните методи:
   - `createArticle(string content)` - създава уеб страница със съдържание, подадено от потребителя и статични заглавие, хедър и футър
   - `createForm(string title,string fields)` - създава форма със заглавие и полета, дефинирани от потребител и без футър

4. Качете кода в GitHub хранилище и качете link към хранилището
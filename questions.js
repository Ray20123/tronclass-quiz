// questions.js
const quizData = [
    {
        number: 1, total: 30, points: 3.3, difficulty: "易",
        text: "What is the basic accounting equation?",
        options: ["Assets = Liabilities - Equity", "Assets = Liabilities + Equity", "Net Income = Revenue + Expenses", "Assets + Liabilities = Equity", "Equity = Assets + Liabilities"]
    },
    {
        number: 2, total: 30, points: 3.3, difficulty: "易",
        text: "Which of the following is an example of an Intangible Asset?",
        options: ["Inventory", "Accounts Receivable", "Copyrights", "Equipment", "Land"]
    },
    {
        number: 3, total: 30, points: 3.3, difficulty: "中",
        text: "Under the accrual basis of accounting, revenues are recognized when:",
        options: ["Cash is received.", "The invoice is sent.", "The performance obligation is satisfied.", "The fiscal year ends.", "Expenses are paid."]
    },
    {
        number: 4, total: 30, points: 3.3, difficulty: "中",
        text: "A debit may signify:",
        options: ["An increase in a liability account.", "A decrease in an asset account.", "An increase in a revenue account.", "An increase in an asset account.", "A decrease in an expense account."]
    },
    {
        number: 5, total: 30, points: 3.3, difficulty: "中",
        text: "The financial statement that reports assets, liabilities, and equity at a specific point in time is the:",
        options: ["Income Statement", "Statement of Cash Flows", "Retained Earnings Statement", "Balance Sheet", "Trial Balance"]
    },
    {
        number: 6, total: 30, points: 3.3, difficulty: "難",
        text: "Which accounts are closed at the end of the accounting period?",
        options: ["Permanent accounts", "Real accounts", "Temporary accounts", "Asset accounts", "Liability accounts"]
    },
    {
        number: 7, total: 30, points: 3.3, difficulty: "中",
        text: "Prepaid insurance is classified as a(n):",
        options: ["Asset", "Liability", "Equity", "Revenue", "Expense"]
    },
    {
        number: 8, total: 30, points: 3.3, difficulty: "中",
        text: "Unearned Service Revenue is a(n):",
        options: ["Asset", "Revenue", "Liability", "Expense", "Contra-asset"]
    },
    {
        number: 9, total: 30, points: 3.3, difficulty: "易",
        text: "The normal balance of an expense account is a:",
        options: ["Credit", "Debit", "Zero balance", "Negative balance", "Both Debit and Credit"]
    },
    {
        number: 10, total: 30, points: 3.3, difficulty: "中",
        text: "The process of transferring journal entry information to the ledger is called:",
        options: ["Journalizing", "Analyzing", "Posting", "Summarizing", "Reporting"]
    },
    {
        number: 11, total: 30, points: 3.3, difficulty: "中",
        text: "Which depreciation method allocates an equal amount of depreciation expense each year?",
        options: ["Double-declining-balance", "Units-of-activity", "Straight-line", "MACRS", "Sum-of-the-years'-digits"]
    },
    {
        number: 12, total: 30, points: 3.3, difficulty: "難",
        text: "Which inventory costing method assumes that the last units purchased are the first ones sold?",
        options: ["FIFO", "LIFO", "Average-cost", "Specific identification", "Retail method"]
    },
    {
        number: 13, total: 30, points: 3.3, difficulty: "中",
        text: "In a bank reconciliation, outstanding checks are:",
        options: ["Added to the bank balance", "Deducted from the bank balance", "Added to the book balance", "Deducted from the book balance", "Ignored"]
    },
    {
        number: 14, total: 30, points: 3.3, difficulty: "中",
        text: "The Allowance for Doubtful Accounts is classified as a(n):",
        options: ["Expense account", "Contra-asset account", "Liability account", "Contra-revenue account", "Equity account"]
    },
    {
        number: 15, total: 30, points: 3.3, difficulty: "難",
        text: "The accounting principle that requires expenses to be reported in the same period as the revenues they helped to generate is the:",
        options: ["Historical cost principle", "Revenue recognition principle", "Matching principle", "Full disclosure principle", "Going concern assumption"]
    },
    {
        number: 16, total: 30, points: 3.3, difficulty: "易",
        text: "If a company buys equipment for $10,000 cash, what is the net effect on the accounting equation?",
        options: ["Assets increase by $10,000", "Liabilities increase by $10,000", "No net effect", "Equity decreases by $10,000", "Assets decrease by $10,000"]
    },
    {
        number: 17, total: 30, points: 3.3, difficulty: "中",
        text: "Accumulated Depreciation appears on the:",
        options: ["Income Statement as an expense", "Balance Sheet as a contra-asset", "Balance Sheet as a liability", "Statement of Retained Earnings", "Statement of Cash Flows"]
    },
    {
        number: 18, total: 30, points: 3.3, difficulty: "中",
        text: "Freight costs incurred by the seller on outgoing merchandise are considered:",
        options: ["Operating expenses (Freight-out)", "Cost of goods sold", "A reduction to sales revenue", "Inventory costs", "Administrative expenses"]
    },
    {
        number: 19, total: 30, points: 3.3, difficulty: "易",
        text: "Which of the following is generally NOT classified as a current liability?",
        options: ["Accounts Payable", "Salaries and Wages Payable", "Bonds Payable (due in 5 years)", "Unearned Revenue", "Short-term Notes Payable"]
    },
    {
        number: 20, total: 30, points: 3.3, difficulty: "易",
        text: "The normal balance of a revenue account is a:",
        options: ["Debit", "Credit", "Zero", "Negative", "Variable balance"]
    },
    {
        number: 21, total: 30, points: 3.3, difficulty: "中",
        text: "Net sales is calculated as:",
        options: ["Sales revenue + Cost of goods sold", "Sales revenue - Cost of goods sold", "Sales revenue - Sales returns and allowances - Sales discounts", "Gross profit - Operating expenses", "Sales revenue + Sales discounts"]
    },
    {
        number: 22, total: 30, points: 3.3, difficulty: "難",
        text: "An NSF (Not Sufficient Funds) check returned by the bank should be:",
        options: ["Added to the bank balance", "Deducted from the bank balance", "Added to the book balance", "Deducted from the book balance", "Recorded as revenue"]
    },
    {
        number: 23, total: 30, points: 3.3, difficulty: "中",
        text: "The cost of goods available for sale must be allocated between:",
        options: ["Beginning inventory and ending inventory", "Ending inventory and cost of goods sold", "Beginning inventory and cost of goods sold", "Net purchases and ending inventory", "Gross profit and operating expenses"]
    },
    {
        number: 24, total: 30, points: 3.3, difficulty: "易",
        text: "A ledger is defined as:",
        options: ["A chronological record of transactions", "A collection of the entire group of accounts maintained by a company", "A list of all accounts and their balances at a given time", "A book of original entry", "A financial statement"]
    },
    {
        number: 25, total: 30, points: 3.3, difficulty: "難",
        text: "Failure to record an adjusting entry for accrued salaries will result in:",
        options: ["Overstated assets", "Understated liabilities and overstated equity", "Overstated liabilities and understated equity", "Understated assets", "No effect on the financial statements"]
    },
    {
        number: 26, total: 30, points: 3.3, difficulty: "中",
        text: "Which financial statement is typically prepared first?",
        options: ["Balance Sheet", "Statement of Cash Flows", "Income Statement", "Retained Earnings Statement", "Statement of Owner's Equity"]
    },
    {
        number: 27, total: 30, points: 3.3, difficulty: "易",
        text: "Goodwill is classified as a(n):",
        options: ["Current asset", "Property, plant, and equipment", "Intangible asset", "Long-term investment", "Current liability"]
    },
    {
        number: 28, total: 30, points: 3.3, difficulty: "中",
        text: "The shipping term 'FOB destination' means that:",
        options: ["The buyer pays the freight costs", "The seller pays the freight costs", "Ownership passes when goods are handed to the carrier", "The goods are shipped for free by law", "The buyer bears the risk of loss during transit"]
    },
    {
        number: 29, total: 30, points: 3.3, difficulty: "中",
        text: "Treasury stock is:",
        options: ["Stock issued to the US Treasury", "A corporation's own stock that has been reacquired but not retired", "Stock that has been authorized but not yet issued", "A highly liquid short-term investment", "Preferred stock"]
    },
    {
        number: 30, total: 30, points: 3.3, difficulty: "易",
        text: "The primary purpose of a trial balance is to:",
        options: ["Ensure that all journal entries have been posted", "Prove the mathematical equality of debits and credits", "Determine the net income for the period", "Calculate the ending balance of retained earnings", "Prepare the financial statements directly"]
    }
];
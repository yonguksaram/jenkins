public with sharing class Jenkins2 {
    @AuraEnabled
    public static String getGreeting() {
        return 'hello';
    }
}
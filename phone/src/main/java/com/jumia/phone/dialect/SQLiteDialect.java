package com.jumia.phone.dialect;

import org.hibernate.dialect.Dialect;
import org.hibernate.dialect.pagination.LimitHandler;

/**
 * @author Denis Gitonga
 */
public class SQLiteDialect extends Dialect {
    public SQLiteDialect() {
        super();
    }

    @Override
    public LimitHandler getLimitHandler() {
        return new SQLiteLimitHandler();
    }
}

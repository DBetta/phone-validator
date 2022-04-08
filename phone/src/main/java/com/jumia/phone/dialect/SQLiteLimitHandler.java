package com.jumia.phone.dialect;

import org.hibernate.dialect.pagination.AbstractLimitHandler;
import org.hibernate.dialect.pagination.LimitHelper;
import org.hibernate.engine.spi.RowSelection;

/**
 * @author Denis Gitonga
 */
public class SQLiteLimitHandler extends AbstractLimitHandler {

    @Override
    public boolean supportsLimit() {
        return true;
    }

    @Override
    public String processSql(String sql, RowSelection selection) {
        final boolean useLimitOffset = supportsLimit()
                && supportsLimitOffset()
                && LimitHelper.hasFirstRow(selection)
                && LimitHelper.hasMaxRows(selection);
        return getLimitString(
                sql,
                useLimitOffset ? LimitHelper.getFirstRow(selection) : 0,
                getMaxOrLimit(selection)
        );
    }

    private String getLimitString(String query, int offset, int limit) {
        return getLimitString(query, (offset > 0 || forceLimitUsage()));
    }

    private String getLimitString(String query, boolean hasOffset) {
        return query + (hasOffset ? " limit ? offset ?" : " limit ?");
    }


}
